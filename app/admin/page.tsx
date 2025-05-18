// src/app/admin/page.tsx
"use client";

import { NarrativeNode } from "@/lib/types"; // Ensure this import is correct
import { useState, useEffect, FormEvent, useCallback } from "react";

// Define a type for the form data that matches your NarrativeNode fields
// plus a temporary id for new choices
type NodeFormData = Omit<
  NarrativeNode,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "choices"
  | "incomingChoices"
  | "gameStatesAsCurrent"
  | "gameStatesAsStart"
  | "gameSettingAsStart"
> & {
  choices: Array<{ id?: string; text: string; nextNodeId: string }>; // Include choices here
};

export default function AdminPage() {
  const [nodes, setNodes] = useState<NarrativeNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const initialFormData: NodeFormData = {
    title: "",
    text: "",
    imageUrl: "",
    challengeType: null,
    challengeIdInternal: null,
    onSuccessNodeId: null,
    onFailureNodeId: null,
    choices: [], // Initialize choices as an empty array
  };
  const [formData, setFormData] = useState<NodeFormData>(initialFormData);
  const [editingNodeId, setEditingNodeId] = useState<string | null>(null);

  const [startNodeId, setStartNodeId] = useState<string | null>(null); // State for global start node

  // State to hold all node titles for dropdowns (for nextNodeId, success/failure)
  const [allNodeOptions, setAllNodeOptions] = useState<
    Array<{ id: string; title: string }>
  >([]);

  // --- Fetching Data ---
  const fetchNodes = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/narrative-nodes");
      if (!res.ok) {
        throw new Error(`Error fetching nodes: ${res.statusText}`);
      }
      const responseData = await res.json();
      if (!responseData.success || !Array.isArray(responseData.nodes)) {
        throw new Error(
          responseData.error ||
            "Invalid data format from API or API reported an error."
        );
      }
      const data: NarrativeNode[] = responseData.nodes;
      setNodes(data);
      setAllNodeOptions(
        data.map((node) => ({ id: node.id, title: node.title }))
      );
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchGameSettings = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/game-settings", {
        cache: "no-store", // <--- ADD THIS LINE
      });
      const data = await response.json();
      if (data.startNodeId) {
        setStartNodeId(data.startNodeId);
      }
    } catch (error) {
      console.error(
        "DEBUG: fetchGameSettings - Error fetching game settings:",
        error
      );
      setError("Failed to fetch game settings.");
    }
  }, []);

  useEffect(() => {
    fetchNodes();
    fetchGameSettings(); // Make sure this is called on mount
  }, []);

  // --- Handlers for Game Settings ---
  const handleSetStartNode = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);
    if (!startNodeId) {
      // Use startNodeId from state, not selectedStartNodeId
      setFormError("Please select a start node.");
      return;
    }

    try {
      const res = await fetch("/api/admin/game-settings", {
        method: "PUT", // Assuming PUT is the correct method for update
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ startNodeId }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error(
          "DEBUG: handleSetStartNode - POST/PUT API Error Response:",
          errorData
        ); // DEBUG 4
        throw new Error(
          errorData.error || `Failed to set start node: ${res.statusText}`
        );
      }

      const responseData = await res.json();

      setFormSuccess("Start node set successfully!");
      fetchGameSettings(); // Re-fetch to ensure UI is updated
    } catch (err: any) {
      setFormError(err.message);
      console.error("DEBUG: handleSetStartNode - Error:", err); // DEBUG 7
    }
  };

  // ... (rest of your form and node handlers remain the same) ...

  const handleEdit = (node: NarrativeNode) => {
    setEditingNodeId(node.id);
    setFormData({
      title: node.title,
      text: node.text,
      imageUrl: node.imageUrl,
      challengeType: node.challengeType,
      challengeIdInternal: node.challengeIdInternal,
      onSuccessNodeId: node.onSuccessNodeId,
      onFailureNodeId: node.onFailureNodeId,
      choices: node.choices.map((choice) => ({
        id: choice.id,
        text: choice.text,
        nextNodeId: choice.nextNodeId,
      })),
    });
    setFormError(null);
    setFormSuccess(null);
  };

  const handleCancelEdit = () => {
    setEditingNodeId(null);
    setFormData(initialFormData);
    setFormError(null);
    setFormSuccess(null);
  };

  const handleCreateNode = async (data: NodeFormData) => {
    try {
      const res = await fetch("/api/admin/narrative-nodes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to create node");
      }
      const responseData = await res.json();
      if (!responseData.success || !responseData.node) {
        throw new Error(
          responseData.error || "Invalid response format after creation."
        );
      }
      setFormSuccess("Node created successfully!");
      setFormData(initialFormData);
      fetchNodes(); // Re-fetch all nodes to update the list
    } catch (err: any) {
      setFormError(err.message);
    }
  };

  const handleUpdateNode = async (nodeId: string, data: NodeFormData) => {
    try {
      const res = await fetch(`/api/admin/narrative-nodes/${nodeId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update node");
      }
      setFormSuccess("Node updated successfully!");
      setEditingNodeId(null);
      setFormData(initialFormData);
      fetchNodes();
    } catch (err: any) {
      setFormError(err.message);
    }
  };

  const handleDeleteNode = async (nodeId: string) => {
    if (!confirm("Are you sure you want to delete this node?")) return;
    try {
      const res = await fetch(`/api/admin/narrative-nodes/${nodeId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to delete node");
      }
      setFormSuccess("Node deleted successfully!");
      fetchNodes();
      if (editingNodeId === nodeId) {
        handleCancelEdit();
      }
      // If the deleted node was the start node, clear it
      if (startNodeId === nodeId) {
        setStartNodeId(null);
        await fetch("/api/admin/game-settings", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ startNodeId: null }),
        });
      }
    } catch (err: any) {
      setFormError(err.message);
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

  const handleAddChoice = () => {
    setFormData((prev) => ({
      ...prev,
      choices: [...prev.choices, { text: "", nextNodeId: "" }],
    }));
  };

  const handleChoiceChange = (
    index: number,
    field: "text" | "nextNodeId",
    value: string
  ) => {
    setFormData((prev) => {
      const newChoices = [...prev.choices];
      newChoices[index] = { ...newChoices[index], [field]: value };
      return { ...prev, choices: newChoices };
    });
  };

  const handleRemoveChoice = (index: number) => {
    setFormData((prev) => {
      const newChoices = prev.choices.filter((_, i) => i !== index);
      return { ...prev, choices: newChoices };
    });
  };

  if (loading) return <p>Loading nodes...</p>;
  if (error) return <p className='text-red-500'>Error: {error}</p>;

  // --- Logic to find the current start node's title for display ---
  const currentStartNodeDisplay = startNodeId
    ? allNodeOptions.find((node) => node.id === startNodeId)
    : null;

  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-6'>Story Admin Panel</h1>

      {/* Global Game Settings Section */}
      <section className='mb-8 p-6 bg-white rounded-lg shadow'>
        <h2 className='text-2xl font-semibold mb-4'>Game Settings</h2>
        {/* ADDED: Display for the current start node */}
        <div className='flex items-center space-x-2 mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Currently Set Start Node:
          </label>
          <span className='font-semibold text-indigo-700'>
            {currentStartNodeDisplay
              ? `${currentStartNodeDisplay.title} (${currentStartNodeDisplay.id})`
              : "Not set"}
          </span>
        </div>
        {/* END ADDED section */}

        <form onSubmit={handleSetStartNode} className='space-y-4'>
          <div>
            <label
              htmlFor='startNodeSelect'
              className='block text-sm font-medium text-gray-700'
            >
              Select New Game Start Node:
            </label>
            <select
              id='startNodeSelect'
              value={startNodeId || ""}
              onChange={(e) => setStartNodeId(e.target.value)}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            >
              <option value=''>-- Select Start Node --</option>
              {allNodeOptions.map((node) => (
                <option key={node.id} value={node.id}>
                  {node.title} ({node.id})
                </option>
              ))}
            </select>
          </div>
          <button
            type='submit'
            className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Set Start Node
          </button>
        </form>
      </section>

      {/* Form to Create/Edit Nodes */}
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
              value={formData.title}
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
              value={formData.text}
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
              value={formData.imageUrl || ""}
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
                value={formData.challengeType || ""}
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
                value={formData.challengeIdInternal || ""}
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
              <select
                id='onSuccessNodeId'
                name='onSuccessNodeId'
                value={formData.onSuccessNodeId || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    onSuccessNodeId: e.target.value || null,
                  })
                }
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              >
                <option value=''>-- Select Success Node --</option>
                {allNodeOptions.map((node) => (
                  <option key={node.id} value={node.id}>
                    {node.title} ({node.id})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor='onFailureNodeId'
                className='block text-sm font-medium text-gray-700'
              >
                On Failure Node ID (Optional):
              </label>
              <select
                id='onFailureNodeId'
                name='onFailureNodeId'
                value={formData.onFailureNodeId || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    onFailureNodeId: e.target.value || null,
                  })
                }
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              >
                <option value=''>-- Select Failure Node --</option>
                {allNodeOptions.map((node) => (
                  <option key={node.id} value={node.id}>
                    {node.title} ({node.id})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Choices Management Section */}
          <div className='border-t pt-4 mt-4'>
            <h3 className='text-lg font-semibold mb-2'>Choices</h3>
            {formData.choices.map((choice, index) => (
              <div
                key={choice.id || `new-choice-${index}`} // Use id if available, otherwise a temporary key
                className='flex items-end space-x-2 mb-2 p-2 border rounded-md bg-gray-50'
              >
                <div className='flex-grow'>
                  <label
                    htmlFor={`choice-text-${index}`}
                    className='block text-xs font-medium text-gray-600'
                  >
                    Choice Text:
                  </label>
                  <input
                    type='text'
                    id={`choice-text-${index}`}
                    value={choice.text}
                    onChange={(e) =>
                      handleChoiceChange(index, "text", e.target.value)
                    }
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1 text-sm'
                    placeholder='Choice text'
                    required
                  />
                </div>
                <div className='flex-grow'>
                  <label
                    htmlFor={`choice-nextNode-${index}`}
                    className='block text-xs font-medium text-gray-600'
                  >
                    Leads to Node:
                  </label>
                  <select
                    id={`choice-nextNode-${index}`}
                    value={choice.nextNodeId}
                    onChange={(e) =>
                      handleChoiceChange(index, "nextNodeId", e.target.value)
                    }
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1 text-sm'
                    required
                  >
                    <option value=''>-- Select Next Node --</option>
                    {allNodeOptions.map((node) => (
                      <option key={node.id} value={node.id}>
                        {node.title} ({node.id})
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type='button'
                  onClick={() => handleRemoveChoice(index)}
                  className='p-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm'
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type='button'
              onClick={handleAddChoice}
              className='mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm'
            >
              Add Choice
            </button>
          </div>

          <button
            type='submit'
            className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
          >
            {editingNodeId ? "Update Node" : "Create Node"}
          </button>

          {editingNodeId && (
            <button
              type='button'
              onClick={handleCancelEdit}
              className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-2'
            >
              Cancel Edit
            </button>
          )}
        </form>
      </section>

      {/* List of Existing Nodes */}
      <section className='p-6 bg-white rounded-lg shadow'>
        <h2 className='text-2xl font-semibold mb-4'>Existing Nodes</h2>
        {nodes.length === 0 ? (
          <p>No nodes created yet.</p>
        ) : (
          <div className='space-y-4'>
            {nodes.map((node) => (
              <div key={node.id} className='border p-4 rounded-md bg-gray-50'>
                <h3 className='text-lg font-semibold'>{node.title}</h3>
                <p className='text-gray-600 text-sm'>ID: {node.id}</p>
                <p className='mt-2'>{node.text}</p>
                {node.imageUrl && (
                  <img
                    src={node.imageUrl}
                    alt={node.title}
                    className='mt-2 h-32 object-cover rounded-md'
                  />
                )}
                {node.challengeType && (
                  <p className='text-sm mt-1'>
                    **Challenge:** {node.challengeType}{" "}
                    {node.challengeIdInternal &&
                      ` (Internal ID: ${node.challengeIdInternal})`}
                  </p>
                )}
                {node.onSuccessNodeId && (
                  <p className='text-sm mt-1'>
                    **Success leads to:**{" "}
                    {allNodeOptions.find((o) => o.id === node.onSuccessNodeId)
                      ?.title || node.onSuccessNodeId}
                  </p>
                )}
                {node.onFailureNodeId && (
                  <p className='text-sm mt-1'>
                    **Failure leads to:**{" "}
                    {allNodeOptions.find((o) => o.id === node.onFailureNodeId)
                      ?.title || node.onFailureNodeId}
                  </p>
                )}

                {node.choices && node.choices.length > 0 && (
                  <div className='mt-3'>
                    <h4 className='text-md font-medium'>Choices:</h4>
                    <ul className='list-disc list-inside text-sm'>
                      {node.choices.map((choice) => (
                        <li key={choice.id}>
                          "{choice.text}" leads to{" "}
                          <span className='font-semibold'>
                            {allNodeOptions.find(
                              (o) => o.id === choice.nextNodeId
                            )?.title || choice.nextNodeId}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className='mt-4 flex space-x-2'>
                  <button
                    onClick={() => handleEdit(node)}
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
