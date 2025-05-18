// src/app/admin/page.tsx
"use client";

import { useState, useEffect, FormEvent } from "react";

interface NarrativeNode {
  id: string;
  title: string;
  text: string;
  imageUrl: string | null;
  choices: Array<{ id: string; text: string; nextNodeId: string }>;
  challengeType: string | null;
  challengeIdInternal: string | null;
  onSuccessNodeId: string | null;
  onFailureNodeId: string | null;
}

type MiniChallengeType =
  | "quick_time_event"
  | "simple_puzzle"
  | "memory_game"
  | "target_click"
  | "riddle";

export default function AdminPage() {
  const [nodes, setNodes] = useState<NarrativeNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  // New state for editing: tracks the ID of the node currently being edited
  const [editingNodeId, setEditingNodeId] = useState<string | null>(null);

  // Initial state for the form data (used for both create and edit)
  const initialFormData = {
    title: "",
    text: "",
    imageUrl: "",
    challengeType: null,
    challengeIdInternal: null,
    onSuccessNodeId: null,
    onFailureNodeId: null,
  };
  const [formData, setFormData] =
    useState<Omit<NarrativeNode, "id" | "choices">>(initialFormData);

  useEffect(() => {
    const fetchNodes = async () => {
      try {
        const response = await fetch("/api/admin/narrative-nodes");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success && Array.isArray(data.nodes)) {
          setNodes(data.nodes);
        } else {
          setError(
            data.error || "Failed to fetch nodes: Unexpected response format."
          );
        }
      } catch (err: any) {
        console.error("Error fetching nodes:", err);
        setError(`Failed to fetch nodes: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchNodes();
  }, []);

  // Function to handle clicking the "Edit" button
  const handleEdit = (node: NarrativeNode) => {
    console.log("1. Edit button clicked for node:", node.id, node.title);
    setEditingNodeId(node.id);
    console.log("2. editingNodeId set to:", node.id);
    // Populate the form with the node's current data
    setFormData({
      title: node.title,
      text: node.text,
      imageUrl: node.imageUrl,
      challengeType: node.challengeType,
      challengeIdInternal: node.challengeIdInternal,
      onSuccessNodeId: node.onSuccessNodeId,
      onFailureNodeId: node.onFailureNodeId,
    });
    console.log("3. formData set to:", {
      title: node.title,
      text: node.text,
      imageUrl: node.imageUrl,
      challengeType: node.challengeType,
      challengeIdInternal: node.challengeIdInternal,
      onSuccessNodeId: node.onSuccessNodeId,
      onFailureNodeId: node.onFailureNodeId,
    });
    setFormError(null);
    setFormSuccess(null);
  };

  // Function to cancel editing and reset the form
  const handleCancelEdit = () => {
    setEditingNodeId(null);
    setFormData(initialFormData);
    setFormError(null);
    setFormSuccess(null);
  };

  // Function to handle creating a new node
  const handleCreateNode = async (
    nodeData: Omit<NarrativeNode, "id" | "choices">
  ) => {
    setFormError(null);
    setFormSuccess(null);

    try {
      const response = await fetch("/api/admin/narrative-nodes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nodeData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setNodes((prevNodes) => [...prevNodes, data.node]);
        setFormSuccess("Node created successfully!");
        setFormData(initialFormData); // Reset form
        setEditingNodeId(null); // Ensure not in edit mode
        return { success: true };
      } else {
        setFormError(
          data.error || `Failed to create node: HTTP status ${response.status}`
        );
        return { success: false, error: data.error };
      }
    } catch (err: any) {
      console.error("Error creating node:", err);
      setFormError(`Error creating node: ${err.message}`);
      return { success: false, error: err.message };
    }
  };

  // Function to handle updating an existing node
  const handleUpdateNode = async (
    nodeId: string,
    updatedData: Omit<NarrativeNode, "id" | "choices">
  ) => {
    setFormError(null);
    setFormSuccess(null);

    try {
      const response = await fetch(`/api/admin/narrative-nodes/${nodeId}`, {
        method: "PUT", // Use PUT or PATCH for updates
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setNodes((prevNodes) =>
          prevNodes.map((node) => (node.id === nodeId ? data.node : node))
        ); // Update the node in the list
        setFormSuccess("Node updated successfully!");
        setFormData(initialFormData); // Reset form
        setEditingNodeId(null); // Exit edit mode
        return { success: true };
      } else {
        setFormError(
          data.error || `Failed to update node: HTTP status ${response.status}`
        );
        return { success: false, error: data.error };
      }
    } catch (err: any) {
      console.error("Error updating node:", err);
      setFormError(`Error updating node: ${err.message}`);
      return { success: false, error: err.message };
    }
  };

  const handleDeleteNode = async (nodeId: string) => {
    if (
      !confirm(
        "Are you sure you want to delete this node and its associated choices? This action cannot be undone."
      )
    ) {
      return;
    }
    try {
      const response = await fetch(`/api/admin/narrative-nodes/${nodeId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeId));
        alert(`Node deleted successfully: ${data.message || ""}`);
        // If the deleted node was currently being edited, clear the form
        if (editingNodeId === nodeId) {
          handleCancelEdit();
        }
      } else {
        alert(`Failed to delete node: ${data.error}`);
      }
    } catch (err: any) {
      console.error("Error deleting node:", err);
      alert(`Error deleting node: ${err.message}`);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (editingNodeId) {
      await handleUpdateNode(editingNodeId, formData);
    } else {
      await handleCreateNode(formData);
    }
  };

  if (loading) return <div className='p-4'>Loading admin panel...</div>;
  if (error) return <div className='p-4 text-red-500'>Error: {error}</div>;

  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-6'>Story Admin Panel</h1>

      {/* Form to Create/Edit Nodes - START OF SECTION TO COPY */}
      <section className='mb-8 p-6 bg-white rounded-lg shadow'>
        <h2 className='text-2xl font-semibold mb-4'>
          {editingNodeId ? "Edit Node" : "Create New Node"}
        </h2>

        {formError && (
          <div
            className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4'
            role='alert'
          >
            <span className='block sm:inline'>{formError}</span>
          </div>
        )}
        {formSuccess && (
          <div
            className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4'
            role='alert'
          >
            <span className='block sm:inline'>{formSuccess}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='title'
              className='block text-sm font-medium text-gray-700'
            >
              Node Title (Unique):
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title || ""} // <-- Ensure using formData
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              required
            />
          </div>
          <div>
            <label
              htmlFor='text'
              className='block text-sm font-medium text-gray-700'
            >
              Node Text:
            </label>
            <textarea
              id='text'
              name='text'
              value={formData.text} // <-- Ensure using formData
              onChange={(e) =>
                setFormData({ ...formData, text: e.target.value })
              }
              rows={4}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor='imageUrl'
              className='block text-sm font-medium text-gray-700'
            >
              Image URL (Optional):
            </label>
            <input
              type='text'
              id='imageUrl'
              name='imageUrl'
              value={formData.imageUrl || ""} // <-- Ensure using formData
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='challengeType'
                className='block text-sm font-medium text-gray-700'
              >
                Challenge Type (Optional):
              </label>
              <select
                id='challengeType'
                name='challengeType'
                value={formData.challengeType || ""} // <-- Ensure using formData
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    challengeType: e.target.value || null,
                  })
                }
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              >
                <option value=''>-- Select Challenge Type --</option>
                <option value='quick_time_event'>Quick Time Event</option>
                <option value='simple_puzzle'>Simple Puzzle</option>
                <option value='memory_game'>Memory Game</option>
                <option value='target_click'>Target Click</option>
                <option value='riddle'>Riddle</option>
              </select>
            </div>
            <div>
              <label
                htmlFor='challengeIdInternal'
                className='block text-sm font-medium text-gray-700'
              >
                Challenge ID (Internal, Optional):
              </label>
              <input
                type='text'
                id='challengeIdInternal'
                name='challengeIdInternal'
                value={formData.challengeIdInternal || ""} // <-- Ensure using formData
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    challengeIdInternal: e.target.value || null,
                  })
                }
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='onSuccessNodeId'
                className='block text-sm font-medium text-gray-700'
              >
                On Success Node ID (Optional):
              </label>
              <input
                type='text'
                id='onSuccessNodeId'
                name='onSuccessNodeId'
                value={formData.onSuccessNodeId || ""} // <-- Ensure using formData
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    onSuccessNodeId: e.target.value || null,
                  })
                }
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
            <div>
              <label
                htmlFor='onFailureNodeId'
                className='block text-sm font-medium text-gray-700'
              >
                On Failure Node ID (Optional):
              </label>
              <input
                type='text'
                id='onFailureNodeId'
                name='onFailureNodeId'
                value={formData.onFailureNodeId || ""} // <-- Ensure using formData
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    onFailureNodeId: e.target.value || null,
                  })
                }
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
          >
            {editingNodeId ? "Update Node" : "Create Node"}
          </button>

          {editingNodeId && (
            <button
              type='button' // Important: This prevents form submission
              onClick={handleCancelEdit}
              className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-2'
            >
              Cancel Edit
            </button>
          )}
        </form>
      </section>
      {/* Form to Create/Edit Nodes - END OF SECTION TO COPY */}

      {/* List of Existing Nodes */}
      <section className='p-6 bg-white rounded-lg shadow'>
        <h2 className='text-2xl font-semibold mb-4'>Existing Nodes</h2>
        {nodes.length === 0 ? (
          <p>No nodes created yet.</p>
        ) : (
          <div className='space-y-4'>
            {nodes.map((node) => (
              <div key={node.id} className='border p-4 rounded-md bg-gray-50'>
                <h3 className='font-bold text-lg mb-2'>
                  {node.title || `Node ${node.id.substring(0, 8)}`}
                </h3>
                <p className='text-gray-700 mb-2'>
                  {node.text.substring(0, 200)}
                  {node.text.length > 200 ? "..." : ""}
                </p>
                {node.imageUrl && (
                  <p className='text-sm text-gray-500'>
                    **Image:** {node.imageUrl}
                  </p>
                )}

                {node.challengeType && (
                  <p className='text-sm text-purple-600'>
                    **Challenge:** {node.challengeType} (ID:{" "}
                    {node.challengeIdInternal}) | Success:{" "}
                    {nodes.find((n) => n.id === node.onSuccessNodeId)?.title ||
                      node.onSuccessNodeId}{" "}
                    | Failure:{" "}
                    {nodes.find((n) => n.id === node.onFailureNodeId)?.title ||
                      node.onFailureNodeId}
                  </p>
                )}

                <div className='mt-2'>
                  <h4 className='font-semibold text-md mb-1'>
                    Choices ({node.choices.length}):
                  </h4>
                  {node.choices.length > 0 ? (
                    <ul className='list-disc ml-5 text-sm'>
                      {node.choices.map((choice) => (
                        <li key={choice.id}>
                          "{choice.text}" {"->"}{" "}
                          {nodes.find((n) => n.id === choice.nextNodeId)
                            ?.title || choice.nextNodeId}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='text-sm text-gray-500'>
                      No choices from this node.
                    </p>
                  )}
                </div>

                <div className='mt-4 flex space-x-2'>
                  <button
                    onClick={() => handleEdit(node)} // <-- Changed this line!
                    className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteNode(node.id)}
                    className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
