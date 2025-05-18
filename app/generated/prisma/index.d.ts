
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model GameState
 * 
 */
export type GameState = $Result.DefaultSelection<Prisma.$GameStatePayload>
/**
 * Model GameSetting
 * 
 */
export type GameSetting = $Result.DefaultSelection<Prisma.$GameSettingPayload>
/**
 * Model NarrativeNode
 * 
 */
export type NarrativeNode = $Result.DefaultSelection<Prisma.$NarrativeNodePayload>
/**
 * Model Choice
 * 
 */
export type Choice = $Result.DefaultSelection<Prisma.$ChoicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameState`: Exposes CRUD operations for the **GameState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameStates
    * const gameStates = await prisma.gameState.findMany()
    * ```
    */
  get gameState(): Prisma.GameStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameSetting`: Exposes CRUD operations for the **GameSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSettings
    * const gameSettings = await prisma.gameSetting.findMany()
    * ```
    */
  get gameSetting(): Prisma.GameSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.narrativeNode`: Exposes CRUD operations for the **NarrativeNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NarrativeNodes
    * const narrativeNodes = await prisma.narrativeNode.findMany()
    * ```
    */
  get narrativeNode(): Prisma.NarrativeNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.choice`: Exposes CRUD operations for the **Choice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choices
    * const choices = await prisma.choice.findMany()
    * ```
    */
  get choice(): Prisma.ChoiceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    GameState: 'GameState',
    GameSetting: 'GameSetting',
    NarrativeNode: 'NarrativeNode',
    Choice: 'Choice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "gameState" | "gameSetting" | "narrativeNode" | "choice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      GameState: {
        payload: Prisma.$GameStatePayload<ExtArgs>
        fields: Prisma.GameStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          findFirst: {
            args: Prisma.GameStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          findMany: {
            args: Prisma.GameStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>[]
          }
          create: {
            args: Prisma.GameStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          createMany: {
            args: Prisma.GameStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>[]
          }
          delete: {
            args: Prisma.GameStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          update: {
            args: Prisma.GameStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          deleteMany: {
            args: Prisma.GameStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>[]
          }
          upsert: {
            args: Prisma.GameStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          aggregate: {
            args: Prisma.GameStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameState>
          }
          groupBy: {
            args: Prisma.GameStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameStateCountArgs<ExtArgs>
            result: $Utils.Optional<GameStateCountAggregateOutputType> | number
          }
        }
      }
      GameSetting: {
        payload: Prisma.$GameSettingPayload<ExtArgs>
        fields: Prisma.GameSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingPayload>
          }
          findFirst: {
            args: Prisma.GameSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingPayload>
          }
          findMany: {
            args: Prisma.GameSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingPayload>[]
          }
          create: {
            args: Prisma.GameSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingPayload>
          }
          createMany: {
            args: Prisma.GameSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingPayload>[]
          }
          delete: {
            args: Prisma.GameSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingPayload>
          }
          update: {
            args: Prisma.GameSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingPayload>
          }
          deleteMany: {
            args: Prisma.GameSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingPayload>[]
          }
          upsert: {
            args: Prisma.GameSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingPayload>
          }
          aggregate: {
            args: Prisma.GameSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameSetting>
          }
          groupBy: {
            args: Prisma.GameSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameSettingCountArgs<ExtArgs>
            result: $Utils.Optional<GameSettingCountAggregateOutputType> | number
          }
        }
      }
      NarrativeNode: {
        payload: Prisma.$NarrativeNodePayload<ExtArgs>
        fields: Prisma.NarrativeNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NarrativeNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NarrativeNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeNodePayload>
          }
          findFirst: {
            args: Prisma.NarrativeNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NarrativeNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeNodePayload>
          }
          findMany: {
            args: Prisma.NarrativeNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeNodePayload>[]
          }
          create: {
            args: Prisma.NarrativeNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeNodePayload>
          }
          createMany: {
            args: Prisma.NarrativeNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NarrativeNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeNodePayload>[]
          }
          delete: {
            args: Prisma.NarrativeNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeNodePayload>
          }
          update: {
            args: Prisma.NarrativeNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeNodePayload>
          }
          deleteMany: {
            args: Prisma.NarrativeNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NarrativeNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NarrativeNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeNodePayload>[]
          }
          upsert: {
            args: Prisma.NarrativeNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeNodePayload>
          }
          aggregate: {
            args: Prisma.NarrativeNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNarrativeNode>
          }
          groupBy: {
            args: Prisma.NarrativeNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NarrativeNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NarrativeNodeCountArgs<ExtArgs>
            result: $Utils.Optional<NarrativeNodeCountAggregateOutputType> | number
          }
        }
      }
      Choice: {
        payload: Prisma.$ChoicePayload<ExtArgs>
        fields: Prisma.ChoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          findFirst: {
            args: Prisma.ChoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          findMany: {
            args: Prisma.ChoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>[]
          }
          create: {
            args: Prisma.ChoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          createMany: {
            args: Prisma.ChoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>[]
          }
          delete: {
            args: Prisma.ChoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          update: {
            args: Prisma.ChoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          deleteMany: {
            args: Prisma.ChoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>[]
          }
          upsert: {
            args: Prisma.ChoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          aggregate: {
            args: Prisma.ChoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoice>
          }
          groupBy: {
            args: Prisma.ChoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoiceCountArgs<ExtArgs>
            result: $Utils.Optional<ChoiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    gameState?: GameStateOmit
    gameSetting?: GameSettingOmit
    narrativeNode?: NarrativeNodeOmit
    choice?: ChoiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gameStates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameStates?: boolean | UserCountOutputTypeCountGameStatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameStateWhereInput
  }


  /**
   * Count Type NarrativeNodeCountOutputType
   */

  export type NarrativeNodeCountOutputType = {
    choices: number
    incomingChoices: number
    gameStatesAsCurrent: number
    gameStatesAsStart: number
    gameSettingAsStart: number
  }

  export type NarrativeNodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choices?: boolean | NarrativeNodeCountOutputTypeCountChoicesArgs
    incomingChoices?: boolean | NarrativeNodeCountOutputTypeCountIncomingChoicesArgs
    gameStatesAsCurrent?: boolean | NarrativeNodeCountOutputTypeCountGameStatesAsCurrentArgs
    gameStatesAsStart?: boolean | NarrativeNodeCountOutputTypeCountGameStatesAsStartArgs
    gameSettingAsStart?: boolean | NarrativeNodeCountOutputTypeCountGameSettingAsStartArgs
  }

  // Custom InputTypes
  /**
   * NarrativeNodeCountOutputType without action
   */
  export type NarrativeNodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNodeCountOutputType
     */
    select?: NarrativeNodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NarrativeNodeCountOutputType without action
   */
  export type NarrativeNodeCountOutputTypeCountChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoiceWhereInput
  }

  /**
   * NarrativeNodeCountOutputType without action
   */
  export type NarrativeNodeCountOutputTypeCountIncomingChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoiceWhereInput
  }

  /**
   * NarrativeNodeCountOutputType without action
   */
  export type NarrativeNodeCountOutputTypeCountGameStatesAsCurrentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameStateWhereInput
  }

  /**
   * NarrativeNodeCountOutputType without action
   */
  export type NarrativeNodeCountOutputTypeCountGameStatesAsStartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameStateWhereInput
  }

  /**
   * NarrativeNodeCountOutputType without action
   */
  export type NarrativeNodeCountOutputTypeCountGameSettingAsStartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSettingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    isAdmin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    isAdmin: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameStates?: boolean | User$gameStatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "isAdmin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameStates?: boolean | User$gameStatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gameStates: Prisma.$GameStatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      isAdmin: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameStates<T extends User$gameStatesArgs<ExtArgs> = {}>(args?: Subset<T, User$gameStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.gameStates
   */
  export type User$gameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    where?: GameStateWhereInput
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    cursor?: GameStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameStateScalarFieldEnum | GameStateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model GameState
   */

  export type AggregateGameState = {
    _count: GameStateCountAggregateOutputType | null
    _avg: GameStateAvgAggregateOutputType | null
    _sum: GameStateSumAggregateOutputType | null
    _min: GameStateMinAggregateOutputType | null
    _max: GameStateMaxAggregateOutputType | null
  }

  export type GameStateAvgAggregateOutputType = {
    currentScore: number | null
  }

  export type GameStateSumAggregateOutputType = {
    currentScore: number | null
  }

  export type GameStateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    currentScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    currentNodeId: string | null
    startNodeId: string | null
  }

  export type GameStateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    currentScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    currentNodeId: string | null
    startNodeId: string | null
  }

  export type GameStateCountAggregateOutputType = {
    id: number
    userId: number
    currentScore: number
    createdAt: number
    updatedAt: number
    currentNodeId: number
    startNodeId: number
    stateData: number
    _all: number
  }


  export type GameStateAvgAggregateInputType = {
    currentScore?: true
  }

  export type GameStateSumAggregateInputType = {
    currentScore?: true
  }

  export type GameStateMinAggregateInputType = {
    id?: true
    userId?: true
    currentScore?: true
    createdAt?: true
    updatedAt?: true
    currentNodeId?: true
    startNodeId?: true
  }

  export type GameStateMaxAggregateInputType = {
    id?: true
    userId?: true
    currentScore?: true
    createdAt?: true
    updatedAt?: true
    currentNodeId?: true
    startNodeId?: true
  }

  export type GameStateCountAggregateInputType = {
    id?: true
    userId?: true
    currentScore?: true
    createdAt?: true
    updatedAt?: true
    currentNodeId?: true
    startNodeId?: true
    stateData?: true
    _all?: true
  }

  export type GameStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameState to aggregate.
     */
    where?: GameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStates to fetch.
     */
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameStates
    **/
    _count?: true | GameStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameStateMaxAggregateInputType
  }

  export type GetGameStateAggregateType<T extends GameStateAggregateArgs> = {
        [P in keyof T & keyof AggregateGameState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameState[P]>
      : GetScalarType<T[P], AggregateGameState[P]>
  }




  export type GameStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameStateWhereInput
    orderBy?: GameStateOrderByWithAggregationInput | GameStateOrderByWithAggregationInput[]
    by: GameStateScalarFieldEnum[] | GameStateScalarFieldEnum
    having?: GameStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameStateCountAggregateInputType | true
    _avg?: GameStateAvgAggregateInputType
    _sum?: GameStateSumAggregateInputType
    _min?: GameStateMinAggregateInputType
    _max?: GameStateMaxAggregateInputType
  }

  export type GameStateGroupByOutputType = {
    id: string
    userId: string
    currentScore: number
    createdAt: Date
    updatedAt: Date
    currentNodeId: string | null
    startNodeId: string | null
    stateData: JsonValue | null
    _count: GameStateCountAggregateOutputType | null
    _avg: GameStateAvgAggregateOutputType | null
    _sum: GameStateSumAggregateOutputType | null
    _min: GameStateMinAggregateOutputType | null
    _max: GameStateMaxAggregateOutputType | null
  }

  type GetGameStateGroupByPayload<T extends GameStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameStateGroupByOutputType[P]>
            : GetScalarType<T[P], GameStateGroupByOutputType[P]>
        }
      >
    >


  export type GameStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentNodeId?: boolean
    startNodeId?: boolean
    stateData?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    currentNode?: boolean | GameState$currentNodeArgs<ExtArgs>
    startNode?: boolean | GameState$startNodeArgs<ExtArgs>
  }, ExtArgs["result"]["gameState"]>

  export type GameStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentNodeId?: boolean
    startNodeId?: boolean
    stateData?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    currentNode?: boolean | GameState$currentNodeArgs<ExtArgs>
    startNode?: boolean | GameState$startNodeArgs<ExtArgs>
  }, ExtArgs["result"]["gameState"]>

  export type GameStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentNodeId?: boolean
    startNodeId?: boolean
    stateData?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    currentNode?: boolean | GameState$currentNodeArgs<ExtArgs>
    startNode?: boolean | GameState$startNodeArgs<ExtArgs>
  }, ExtArgs["result"]["gameState"]>

  export type GameStateSelectScalar = {
    id?: boolean
    userId?: boolean
    currentScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentNodeId?: boolean
    startNodeId?: boolean
    stateData?: boolean
  }

  export type GameStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "currentScore" | "createdAt" | "updatedAt" | "currentNodeId" | "startNodeId" | "stateData", ExtArgs["result"]["gameState"]>
  export type GameStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    currentNode?: boolean | GameState$currentNodeArgs<ExtArgs>
    startNode?: boolean | GameState$startNodeArgs<ExtArgs>
  }
  export type GameStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    currentNode?: boolean | GameState$currentNodeArgs<ExtArgs>
    startNode?: boolean | GameState$startNodeArgs<ExtArgs>
  }
  export type GameStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    currentNode?: boolean | GameState$currentNodeArgs<ExtArgs>
    startNode?: boolean | GameState$startNodeArgs<ExtArgs>
  }

  export type $GameStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameState"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      currentNode: Prisma.$NarrativeNodePayload<ExtArgs> | null
      startNode: Prisma.$NarrativeNodePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currentScore: number
      createdAt: Date
      updatedAt: Date
      currentNodeId: string | null
      startNodeId: string | null
      stateData: Prisma.JsonValue | null
    }, ExtArgs["result"]["gameState"]>
    composites: {}
  }

  type GameStateGetPayload<S extends boolean | null | undefined | GameStateDefaultArgs> = $Result.GetResult<Prisma.$GameStatePayload, S>

  type GameStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameStateCountAggregateInputType | true
    }

  export interface GameStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameState'], meta: { name: 'GameState' } }
    /**
     * Find zero or one GameState that matches the filter.
     * @param {GameStateFindUniqueArgs} args - Arguments to find a GameState
     * @example
     * // Get one GameState
     * const gameState = await prisma.gameState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameStateFindUniqueArgs>(args: SelectSubset<T, GameStateFindUniqueArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameStateFindUniqueOrThrowArgs} args - Arguments to find a GameState
     * @example
     * // Get one GameState
     * const gameState = await prisma.gameState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameStateFindUniqueOrThrowArgs>(args: SelectSubset<T, GameStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateFindFirstArgs} args - Arguments to find a GameState
     * @example
     * // Get one GameState
     * const gameState = await prisma.gameState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameStateFindFirstArgs>(args?: SelectSubset<T, GameStateFindFirstArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateFindFirstOrThrowArgs} args - Arguments to find a GameState
     * @example
     * // Get one GameState
     * const gameState = await prisma.gameState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameStateFindFirstOrThrowArgs>(args?: SelectSubset<T, GameStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameStates
     * const gameStates = await prisma.gameState.findMany()
     * 
     * // Get first 10 GameStates
     * const gameStates = await prisma.gameState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameStateWithIdOnly = await prisma.gameState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameStateFindManyArgs>(args?: SelectSubset<T, GameStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameState.
     * @param {GameStateCreateArgs} args - Arguments to create a GameState.
     * @example
     * // Create one GameState
     * const GameState = await prisma.gameState.create({
     *   data: {
     *     // ... data to create a GameState
     *   }
     * })
     * 
     */
    create<T extends GameStateCreateArgs>(args: SelectSubset<T, GameStateCreateArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameStates.
     * @param {GameStateCreateManyArgs} args - Arguments to create many GameStates.
     * @example
     * // Create many GameStates
     * const gameState = await prisma.gameState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameStateCreateManyArgs>(args?: SelectSubset<T, GameStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameStates and returns the data saved in the database.
     * @param {GameStateCreateManyAndReturnArgs} args - Arguments to create many GameStates.
     * @example
     * // Create many GameStates
     * const gameState = await prisma.gameState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameStates and only return the `id`
     * const gameStateWithIdOnly = await prisma.gameState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameStateCreateManyAndReturnArgs>(args?: SelectSubset<T, GameStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameState.
     * @param {GameStateDeleteArgs} args - Arguments to delete one GameState.
     * @example
     * // Delete one GameState
     * const GameState = await prisma.gameState.delete({
     *   where: {
     *     // ... filter to delete one GameState
     *   }
     * })
     * 
     */
    delete<T extends GameStateDeleteArgs>(args: SelectSubset<T, GameStateDeleteArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameState.
     * @param {GameStateUpdateArgs} args - Arguments to update one GameState.
     * @example
     * // Update one GameState
     * const gameState = await prisma.gameState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameStateUpdateArgs>(args: SelectSubset<T, GameStateUpdateArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameStates.
     * @param {GameStateDeleteManyArgs} args - Arguments to filter GameStates to delete.
     * @example
     * // Delete a few GameStates
     * const { count } = await prisma.gameState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameStateDeleteManyArgs>(args?: SelectSubset<T, GameStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameStates
     * const gameState = await prisma.gameState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameStateUpdateManyArgs>(args: SelectSubset<T, GameStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameStates and returns the data updated in the database.
     * @param {GameStateUpdateManyAndReturnArgs} args - Arguments to update many GameStates.
     * @example
     * // Update many GameStates
     * const gameState = await prisma.gameState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameStates and only return the `id`
     * const gameStateWithIdOnly = await prisma.gameState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameStateUpdateManyAndReturnArgs>(args: SelectSubset<T, GameStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameState.
     * @param {GameStateUpsertArgs} args - Arguments to update or create a GameState.
     * @example
     * // Update or create a GameState
     * const gameState = await prisma.gameState.upsert({
     *   create: {
     *     // ... data to create a GameState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameState we want to update
     *   }
     * })
     */
    upsert<T extends GameStateUpsertArgs>(args: SelectSubset<T, GameStateUpsertArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateCountArgs} args - Arguments to filter GameStates to count.
     * @example
     * // Count the number of GameStates
     * const count = await prisma.gameState.count({
     *   where: {
     *     // ... the filter for the GameStates we want to count
     *   }
     * })
    **/
    count<T extends GameStateCountArgs>(
      args?: Subset<T, GameStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameStateAggregateArgs>(args: Subset<T, GameStateAggregateArgs>): Prisma.PrismaPromise<GetGameStateAggregateType<T>>

    /**
     * Group by GameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameStateGroupByArgs['orderBy'] }
        : { orderBy?: GameStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameState model
   */
  readonly fields: GameStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currentNode<T extends GameState$currentNodeArgs<ExtArgs> = {}>(args?: Subset<T, GameState$currentNodeArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    startNode<T extends GameState$startNodeArgs<ExtArgs> = {}>(args?: Subset<T, GameState$startNodeArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameState model
   */
  interface GameStateFieldRefs {
    readonly id: FieldRef<"GameState", 'String'>
    readonly userId: FieldRef<"GameState", 'String'>
    readonly currentScore: FieldRef<"GameState", 'Int'>
    readonly createdAt: FieldRef<"GameState", 'DateTime'>
    readonly updatedAt: FieldRef<"GameState", 'DateTime'>
    readonly currentNodeId: FieldRef<"GameState", 'String'>
    readonly startNodeId: FieldRef<"GameState", 'String'>
    readonly stateData: FieldRef<"GameState", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * GameState findUnique
   */
  export type GameStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter, which GameState to fetch.
     */
    where: GameStateWhereUniqueInput
  }

  /**
   * GameState findUniqueOrThrow
   */
  export type GameStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter, which GameState to fetch.
     */
    where: GameStateWhereUniqueInput
  }

  /**
   * GameState findFirst
   */
  export type GameStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter, which GameState to fetch.
     */
    where?: GameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStates to fetch.
     */
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameStates.
     */
    cursor?: GameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameStates.
     */
    distinct?: GameStateScalarFieldEnum | GameStateScalarFieldEnum[]
  }

  /**
   * GameState findFirstOrThrow
   */
  export type GameStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter, which GameState to fetch.
     */
    where?: GameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStates to fetch.
     */
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameStates.
     */
    cursor?: GameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameStates.
     */
    distinct?: GameStateScalarFieldEnum | GameStateScalarFieldEnum[]
  }

  /**
   * GameState findMany
   */
  export type GameStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter, which GameStates to fetch.
     */
    where?: GameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStates to fetch.
     */
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameStates.
     */
    cursor?: GameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStates.
     */
    skip?: number
    distinct?: GameStateScalarFieldEnum | GameStateScalarFieldEnum[]
  }

  /**
   * GameState create
   */
  export type GameStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * The data needed to create a GameState.
     */
    data: XOR<GameStateCreateInput, GameStateUncheckedCreateInput>
  }

  /**
   * GameState createMany
   */
  export type GameStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameStates.
     */
    data: GameStateCreateManyInput | GameStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameState createManyAndReturn
   */
  export type GameStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * The data used to create many GameStates.
     */
    data: GameStateCreateManyInput | GameStateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameState update
   */
  export type GameStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * The data needed to update a GameState.
     */
    data: XOR<GameStateUpdateInput, GameStateUncheckedUpdateInput>
    /**
     * Choose, which GameState to update.
     */
    where: GameStateWhereUniqueInput
  }

  /**
   * GameState updateMany
   */
  export type GameStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameStates.
     */
    data: XOR<GameStateUpdateManyMutationInput, GameStateUncheckedUpdateManyInput>
    /**
     * Filter which GameStates to update
     */
    where?: GameStateWhereInput
    /**
     * Limit how many GameStates to update.
     */
    limit?: number
  }

  /**
   * GameState updateManyAndReturn
   */
  export type GameStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * The data used to update GameStates.
     */
    data: XOR<GameStateUpdateManyMutationInput, GameStateUncheckedUpdateManyInput>
    /**
     * Filter which GameStates to update
     */
    where?: GameStateWhereInput
    /**
     * Limit how many GameStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameState upsert
   */
  export type GameStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * The filter to search for the GameState to update in case it exists.
     */
    where: GameStateWhereUniqueInput
    /**
     * In case the GameState found by the `where` argument doesn't exist, create a new GameState with this data.
     */
    create: XOR<GameStateCreateInput, GameStateUncheckedCreateInput>
    /**
     * In case the GameState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameStateUpdateInput, GameStateUncheckedUpdateInput>
  }

  /**
   * GameState delete
   */
  export type GameStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter which GameState to delete.
     */
    where: GameStateWhereUniqueInput
  }

  /**
   * GameState deleteMany
   */
  export type GameStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameStates to delete
     */
    where?: GameStateWhereInput
    /**
     * Limit how many GameStates to delete.
     */
    limit?: number
  }

  /**
   * GameState.currentNode
   */
  export type GameState$currentNodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    where?: NarrativeNodeWhereInput
  }

  /**
   * GameState.startNode
   */
  export type GameState$startNodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    where?: NarrativeNodeWhereInput
  }

  /**
   * GameState without action
   */
  export type GameStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
  }


  /**
   * Model GameSetting
   */

  export type AggregateGameSetting = {
    _count: GameSettingCountAggregateOutputType | null
    _min: GameSettingMinAggregateOutputType | null
    _max: GameSettingMaxAggregateOutputType | null
  }

  export type GameSettingMinAggregateOutputType = {
    id: string | null
    settingName: string | null
    startNodeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameSettingMaxAggregateOutputType = {
    id: string | null
    settingName: string | null
    startNodeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameSettingCountAggregateOutputType = {
    id: number
    settingName: number
    startNodeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameSettingMinAggregateInputType = {
    id?: true
    settingName?: true
    startNodeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameSettingMaxAggregateInputType = {
    id?: true
    settingName?: true
    startNodeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameSettingCountAggregateInputType = {
    id?: true
    settingName?: true
    startNodeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSetting to aggregate.
     */
    where?: GameSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSettings to fetch.
     */
    orderBy?: GameSettingOrderByWithRelationInput | GameSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameSettings
    **/
    _count?: true | GameSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSettingMaxAggregateInputType
  }

  export type GetGameSettingAggregateType<T extends GameSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSetting[P]>
      : GetScalarType<T[P], AggregateGameSetting[P]>
  }




  export type GameSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSettingWhereInput
    orderBy?: GameSettingOrderByWithAggregationInput | GameSettingOrderByWithAggregationInput[]
    by: GameSettingScalarFieldEnum[] | GameSettingScalarFieldEnum
    having?: GameSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSettingCountAggregateInputType | true
    _min?: GameSettingMinAggregateInputType
    _max?: GameSettingMaxAggregateInputType
  }

  export type GameSettingGroupByOutputType = {
    id: string
    settingName: string
    startNodeId: string | null
    createdAt: Date
    updatedAt: Date
    _count: GameSettingCountAggregateOutputType | null
    _min: GameSettingMinAggregateOutputType | null
    _max: GameSettingMaxAggregateOutputType | null
  }

  type GetGameSettingGroupByPayload<T extends GameSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSettingGroupByOutputType[P]>
            : GetScalarType<T[P], GameSettingGroupByOutputType[P]>
        }
      >
    >


  export type GameSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    settingName?: boolean
    startNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startNode?: boolean | GameSetting$startNodeArgs<ExtArgs>
  }, ExtArgs["result"]["gameSetting"]>

  export type GameSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    settingName?: boolean
    startNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startNode?: boolean | GameSetting$startNodeArgs<ExtArgs>
  }, ExtArgs["result"]["gameSetting"]>

  export type GameSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    settingName?: boolean
    startNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startNode?: boolean | GameSetting$startNodeArgs<ExtArgs>
  }, ExtArgs["result"]["gameSetting"]>

  export type GameSettingSelectScalar = {
    id?: boolean
    settingName?: boolean
    startNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "settingName" | "startNodeId" | "createdAt" | "updatedAt", ExtArgs["result"]["gameSetting"]>
  export type GameSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startNode?: boolean | GameSetting$startNodeArgs<ExtArgs>
  }
  export type GameSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startNode?: boolean | GameSetting$startNodeArgs<ExtArgs>
  }
  export type GameSettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startNode?: boolean | GameSetting$startNodeArgs<ExtArgs>
  }

  export type $GameSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameSetting"
    objects: {
      startNode: Prisma.$NarrativeNodePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      settingName: string
      startNodeId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameSetting"]>
    composites: {}
  }

  type GameSettingGetPayload<S extends boolean | null | undefined | GameSettingDefaultArgs> = $Result.GetResult<Prisma.$GameSettingPayload, S>

  type GameSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameSettingCountAggregateInputType | true
    }

  export interface GameSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameSetting'], meta: { name: 'GameSetting' } }
    /**
     * Find zero or one GameSetting that matches the filter.
     * @param {GameSettingFindUniqueArgs} args - Arguments to find a GameSetting
     * @example
     * // Get one GameSetting
     * const gameSetting = await prisma.gameSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameSettingFindUniqueArgs>(args: SelectSubset<T, GameSettingFindUniqueArgs<ExtArgs>>): Prisma__GameSettingClient<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameSettingFindUniqueOrThrowArgs} args - Arguments to find a GameSetting
     * @example
     * // Get one GameSetting
     * const gameSetting = await prisma.gameSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, GameSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameSettingClient<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingFindFirstArgs} args - Arguments to find a GameSetting
     * @example
     * // Get one GameSetting
     * const gameSetting = await prisma.gameSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameSettingFindFirstArgs>(args?: SelectSubset<T, GameSettingFindFirstArgs<ExtArgs>>): Prisma__GameSettingClient<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingFindFirstOrThrowArgs} args - Arguments to find a GameSetting
     * @example
     * // Get one GameSetting
     * const gameSetting = await prisma.gameSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, GameSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameSettingClient<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSettings
     * const gameSettings = await prisma.gameSetting.findMany()
     * 
     * // Get first 10 GameSettings
     * const gameSettings = await prisma.gameSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameSettingWithIdOnly = await prisma.gameSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameSettingFindManyArgs>(args?: SelectSubset<T, GameSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameSetting.
     * @param {GameSettingCreateArgs} args - Arguments to create a GameSetting.
     * @example
     * // Create one GameSetting
     * const GameSetting = await prisma.gameSetting.create({
     *   data: {
     *     // ... data to create a GameSetting
     *   }
     * })
     * 
     */
    create<T extends GameSettingCreateArgs>(args: SelectSubset<T, GameSettingCreateArgs<ExtArgs>>): Prisma__GameSettingClient<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameSettings.
     * @param {GameSettingCreateManyArgs} args - Arguments to create many GameSettings.
     * @example
     * // Create many GameSettings
     * const gameSetting = await prisma.gameSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameSettingCreateManyArgs>(args?: SelectSubset<T, GameSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameSettings and returns the data saved in the database.
     * @param {GameSettingCreateManyAndReturnArgs} args - Arguments to create many GameSettings.
     * @example
     * // Create many GameSettings
     * const gameSetting = await prisma.gameSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameSettings and only return the `id`
     * const gameSettingWithIdOnly = await prisma.gameSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, GameSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameSetting.
     * @param {GameSettingDeleteArgs} args - Arguments to delete one GameSetting.
     * @example
     * // Delete one GameSetting
     * const GameSetting = await prisma.gameSetting.delete({
     *   where: {
     *     // ... filter to delete one GameSetting
     *   }
     * })
     * 
     */
    delete<T extends GameSettingDeleteArgs>(args: SelectSubset<T, GameSettingDeleteArgs<ExtArgs>>): Prisma__GameSettingClient<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameSetting.
     * @param {GameSettingUpdateArgs} args - Arguments to update one GameSetting.
     * @example
     * // Update one GameSetting
     * const gameSetting = await prisma.gameSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameSettingUpdateArgs>(args: SelectSubset<T, GameSettingUpdateArgs<ExtArgs>>): Prisma__GameSettingClient<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameSettings.
     * @param {GameSettingDeleteManyArgs} args - Arguments to filter GameSettings to delete.
     * @example
     * // Delete a few GameSettings
     * const { count } = await prisma.gameSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameSettingDeleteManyArgs>(args?: SelectSubset<T, GameSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSettings
     * const gameSetting = await prisma.gameSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameSettingUpdateManyArgs>(args: SelectSubset<T, GameSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSettings and returns the data updated in the database.
     * @param {GameSettingUpdateManyAndReturnArgs} args - Arguments to update many GameSettings.
     * @example
     * // Update many GameSettings
     * const gameSetting = await prisma.gameSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameSettings and only return the `id`
     * const gameSettingWithIdOnly = await prisma.gameSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, GameSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameSetting.
     * @param {GameSettingUpsertArgs} args - Arguments to update or create a GameSetting.
     * @example
     * // Update or create a GameSetting
     * const gameSetting = await prisma.gameSetting.upsert({
     *   create: {
     *     // ... data to create a GameSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSetting we want to update
     *   }
     * })
     */
    upsert<T extends GameSettingUpsertArgs>(args: SelectSubset<T, GameSettingUpsertArgs<ExtArgs>>): Prisma__GameSettingClient<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingCountArgs} args - Arguments to filter GameSettings to count.
     * @example
     * // Count the number of GameSettings
     * const count = await prisma.gameSetting.count({
     *   where: {
     *     // ... the filter for the GameSettings we want to count
     *   }
     * })
    **/
    count<T extends GameSettingCountArgs>(
      args?: Subset<T, GameSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameSettingAggregateArgs>(args: Subset<T, GameSettingAggregateArgs>): Prisma.PrismaPromise<GetGameSettingAggregateType<T>>

    /**
     * Group by GameSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameSettingGroupByArgs['orderBy'] }
        : { orderBy?: GameSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameSetting model
   */
  readonly fields: GameSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    startNode<T extends GameSetting$startNodeArgs<ExtArgs> = {}>(args?: Subset<T, GameSetting$startNodeArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameSetting model
   */
  interface GameSettingFieldRefs {
    readonly id: FieldRef<"GameSetting", 'String'>
    readonly settingName: FieldRef<"GameSetting", 'String'>
    readonly startNodeId: FieldRef<"GameSetting", 'String'>
    readonly createdAt: FieldRef<"GameSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"GameSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameSetting findUnique
   */
  export type GameSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingInclude<ExtArgs> | null
    /**
     * Filter, which GameSetting to fetch.
     */
    where: GameSettingWhereUniqueInput
  }

  /**
   * GameSetting findUniqueOrThrow
   */
  export type GameSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingInclude<ExtArgs> | null
    /**
     * Filter, which GameSetting to fetch.
     */
    where: GameSettingWhereUniqueInput
  }

  /**
   * GameSetting findFirst
   */
  export type GameSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingInclude<ExtArgs> | null
    /**
     * Filter, which GameSetting to fetch.
     */
    where?: GameSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSettings to fetch.
     */
    orderBy?: GameSettingOrderByWithRelationInput | GameSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSettings.
     */
    cursor?: GameSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSettings.
     */
    distinct?: GameSettingScalarFieldEnum | GameSettingScalarFieldEnum[]
  }

  /**
   * GameSetting findFirstOrThrow
   */
  export type GameSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingInclude<ExtArgs> | null
    /**
     * Filter, which GameSetting to fetch.
     */
    where?: GameSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSettings to fetch.
     */
    orderBy?: GameSettingOrderByWithRelationInput | GameSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSettings.
     */
    cursor?: GameSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSettings.
     */
    distinct?: GameSettingScalarFieldEnum | GameSettingScalarFieldEnum[]
  }

  /**
   * GameSetting findMany
   */
  export type GameSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingInclude<ExtArgs> | null
    /**
     * Filter, which GameSettings to fetch.
     */
    where?: GameSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSettings to fetch.
     */
    orderBy?: GameSettingOrderByWithRelationInput | GameSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameSettings.
     */
    cursor?: GameSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSettings.
     */
    skip?: number
    distinct?: GameSettingScalarFieldEnum | GameSettingScalarFieldEnum[]
  }

  /**
   * GameSetting create
   */
  export type GameSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a GameSetting.
     */
    data: XOR<GameSettingCreateInput, GameSettingUncheckedCreateInput>
  }

  /**
   * GameSetting createMany
   */
  export type GameSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameSettings.
     */
    data: GameSettingCreateManyInput | GameSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameSetting createManyAndReturn
   */
  export type GameSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * The data used to create many GameSettings.
     */
    data: GameSettingCreateManyInput | GameSettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameSetting update
   */
  export type GameSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a GameSetting.
     */
    data: XOR<GameSettingUpdateInput, GameSettingUncheckedUpdateInput>
    /**
     * Choose, which GameSetting to update.
     */
    where: GameSettingWhereUniqueInput
  }

  /**
   * GameSetting updateMany
   */
  export type GameSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameSettings.
     */
    data: XOR<GameSettingUpdateManyMutationInput, GameSettingUncheckedUpdateManyInput>
    /**
     * Filter which GameSettings to update
     */
    where?: GameSettingWhereInput
    /**
     * Limit how many GameSettings to update.
     */
    limit?: number
  }

  /**
   * GameSetting updateManyAndReturn
   */
  export type GameSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * The data used to update GameSettings.
     */
    data: XOR<GameSettingUpdateManyMutationInput, GameSettingUncheckedUpdateManyInput>
    /**
     * Filter which GameSettings to update
     */
    where?: GameSettingWhereInput
    /**
     * Limit how many GameSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameSetting upsert
   */
  export type GameSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the GameSetting to update in case it exists.
     */
    where: GameSettingWhereUniqueInput
    /**
     * In case the GameSetting found by the `where` argument doesn't exist, create a new GameSetting with this data.
     */
    create: XOR<GameSettingCreateInput, GameSettingUncheckedCreateInput>
    /**
     * In case the GameSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameSettingUpdateInput, GameSettingUncheckedUpdateInput>
  }

  /**
   * GameSetting delete
   */
  export type GameSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingInclude<ExtArgs> | null
    /**
     * Filter which GameSetting to delete.
     */
    where: GameSettingWhereUniqueInput
  }

  /**
   * GameSetting deleteMany
   */
  export type GameSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSettings to delete
     */
    where?: GameSettingWhereInput
    /**
     * Limit how many GameSettings to delete.
     */
    limit?: number
  }

  /**
   * GameSetting.startNode
   */
  export type GameSetting$startNodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    where?: NarrativeNodeWhereInput
  }

  /**
   * GameSetting without action
   */
  export type GameSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingInclude<ExtArgs> | null
  }


  /**
   * Model NarrativeNode
   */

  export type AggregateNarrativeNode = {
    _count: NarrativeNodeCountAggregateOutputType | null
    _min: NarrativeNodeMinAggregateOutputType | null
    _max: NarrativeNodeMaxAggregateOutputType | null
  }

  export type NarrativeNodeMinAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    challengeType: string | null
    challengeIdInternal: string | null
    onSuccessNodeId: string | null
    onFailureNodeId: string | null
  }

  export type NarrativeNodeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    challengeType: string | null
    challengeIdInternal: string | null
    onSuccessNodeId: string | null
    onFailureNodeId: string | null
  }

  export type NarrativeNodeCountAggregateOutputType = {
    id: number
    title: number
    text: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    challengeType: number
    challengeIdInternal: number
    onSuccessNodeId: number
    onFailureNodeId: number
    _all: number
  }


  export type NarrativeNodeMinAggregateInputType = {
    id?: true
    title?: true
    text?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    challengeType?: true
    challengeIdInternal?: true
    onSuccessNodeId?: true
    onFailureNodeId?: true
  }

  export type NarrativeNodeMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    challengeType?: true
    challengeIdInternal?: true
    onSuccessNodeId?: true
    onFailureNodeId?: true
  }

  export type NarrativeNodeCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    challengeType?: true
    challengeIdInternal?: true
    onSuccessNodeId?: true
    onFailureNodeId?: true
    _all?: true
  }

  export type NarrativeNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NarrativeNode to aggregate.
     */
    where?: NarrativeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NarrativeNodes to fetch.
     */
    orderBy?: NarrativeNodeOrderByWithRelationInput | NarrativeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NarrativeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NarrativeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NarrativeNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NarrativeNodes
    **/
    _count?: true | NarrativeNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NarrativeNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NarrativeNodeMaxAggregateInputType
  }

  export type GetNarrativeNodeAggregateType<T extends NarrativeNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateNarrativeNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNarrativeNode[P]>
      : GetScalarType<T[P], AggregateNarrativeNode[P]>
  }




  export type NarrativeNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NarrativeNodeWhereInput
    orderBy?: NarrativeNodeOrderByWithAggregationInput | NarrativeNodeOrderByWithAggregationInput[]
    by: NarrativeNodeScalarFieldEnum[] | NarrativeNodeScalarFieldEnum
    having?: NarrativeNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NarrativeNodeCountAggregateInputType | true
    _min?: NarrativeNodeMinAggregateInputType
    _max?: NarrativeNodeMaxAggregateInputType
  }

  export type NarrativeNodeGroupByOutputType = {
    id: string
    title: string
    text: string
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    challengeType: string | null
    challengeIdInternal: string | null
    onSuccessNodeId: string | null
    onFailureNodeId: string | null
    _count: NarrativeNodeCountAggregateOutputType | null
    _min: NarrativeNodeMinAggregateOutputType | null
    _max: NarrativeNodeMaxAggregateOutputType | null
  }

  type GetNarrativeNodeGroupByPayload<T extends NarrativeNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NarrativeNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NarrativeNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NarrativeNodeGroupByOutputType[P]>
            : GetScalarType<T[P], NarrativeNodeGroupByOutputType[P]>
        }
      >
    >


  export type NarrativeNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengeType?: boolean
    challengeIdInternal?: boolean
    onSuccessNodeId?: boolean
    onFailureNodeId?: boolean
    choices?: boolean | NarrativeNode$choicesArgs<ExtArgs>
    incomingChoices?: boolean | NarrativeNode$incomingChoicesArgs<ExtArgs>
    gameStatesAsCurrent?: boolean | NarrativeNode$gameStatesAsCurrentArgs<ExtArgs>
    gameStatesAsStart?: boolean | NarrativeNode$gameStatesAsStartArgs<ExtArgs>
    gameSettingAsStart?: boolean | NarrativeNode$gameSettingAsStartArgs<ExtArgs>
    _count?: boolean | NarrativeNodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["narrativeNode"]>

  export type NarrativeNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengeType?: boolean
    challengeIdInternal?: boolean
    onSuccessNodeId?: boolean
    onFailureNodeId?: boolean
  }, ExtArgs["result"]["narrativeNode"]>

  export type NarrativeNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengeType?: boolean
    challengeIdInternal?: boolean
    onSuccessNodeId?: boolean
    onFailureNodeId?: boolean
  }, ExtArgs["result"]["narrativeNode"]>

  export type NarrativeNodeSelectScalar = {
    id?: boolean
    title?: boolean
    text?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengeType?: boolean
    challengeIdInternal?: boolean
    onSuccessNodeId?: boolean
    onFailureNodeId?: boolean
  }

  export type NarrativeNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "text" | "imageUrl" | "createdAt" | "updatedAt" | "challengeType" | "challengeIdInternal" | "onSuccessNodeId" | "onFailureNodeId", ExtArgs["result"]["narrativeNode"]>
  export type NarrativeNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choices?: boolean | NarrativeNode$choicesArgs<ExtArgs>
    incomingChoices?: boolean | NarrativeNode$incomingChoicesArgs<ExtArgs>
    gameStatesAsCurrent?: boolean | NarrativeNode$gameStatesAsCurrentArgs<ExtArgs>
    gameStatesAsStart?: boolean | NarrativeNode$gameStatesAsStartArgs<ExtArgs>
    gameSettingAsStart?: boolean | NarrativeNode$gameSettingAsStartArgs<ExtArgs>
    _count?: boolean | NarrativeNodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NarrativeNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NarrativeNodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NarrativeNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NarrativeNode"
    objects: {
      choices: Prisma.$ChoicePayload<ExtArgs>[]
      incomingChoices: Prisma.$ChoicePayload<ExtArgs>[]
      gameStatesAsCurrent: Prisma.$GameStatePayload<ExtArgs>[]
      gameStatesAsStart: Prisma.$GameStatePayload<ExtArgs>[]
      gameSettingAsStart: Prisma.$GameSettingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      text: string
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
      challengeType: string | null
      challengeIdInternal: string | null
      onSuccessNodeId: string | null
      onFailureNodeId: string | null
    }, ExtArgs["result"]["narrativeNode"]>
    composites: {}
  }

  type NarrativeNodeGetPayload<S extends boolean | null | undefined | NarrativeNodeDefaultArgs> = $Result.GetResult<Prisma.$NarrativeNodePayload, S>

  type NarrativeNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NarrativeNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NarrativeNodeCountAggregateInputType | true
    }

  export interface NarrativeNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NarrativeNode'], meta: { name: 'NarrativeNode' } }
    /**
     * Find zero or one NarrativeNode that matches the filter.
     * @param {NarrativeNodeFindUniqueArgs} args - Arguments to find a NarrativeNode
     * @example
     * // Get one NarrativeNode
     * const narrativeNode = await prisma.narrativeNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NarrativeNodeFindUniqueArgs>(args: SelectSubset<T, NarrativeNodeFindUniqueArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NarrativeNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NarrativeNodeFindUniqueOrThrowArgs} args - Arguments to find a NarrativeNode
     * @example
     * // Get one NarrativeNode
     * const narrativeNode = await prisma.narrativeNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NarrativeNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, NarrativeNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NarrativeNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeNodeFindFirstArgs} args - Arguments to find a NarrativeNode
     * @example
     * // Get one NarrativeNode
     * const narrativeNode = await prisma.narrativeNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NarrativeNodeFindFirstArgs>(args?: SelectSubset<T, NarrativeNodeFindFirstArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NarrativeNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeNodeFindFirstOrThrowArgs} args - Arguments to find a NarrativeNode
     * @example
     * // Get one NarrativeNode
     * const narrativeNode = await prisma.narrativeNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NarrativeNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, NarrativeNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NarrativeNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NarrativeNodes
     * const narrativeNodes = await prisma.narrativeNode.findMany()
     * 
     * // Get first 10 NarrativeNodes
     * const narrativeNodes = await prisma.narrativeNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const narrativeNodeWithIdOnly = await prisma.narrativeNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NarrativeNodeFindManyArgs>(args?: SelectSubset<T, NarrativeNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NarrativeNode.
     * @param {NarrativeNodeCreateArgs} args - Arguments to create a NarrativeNode.
     * @example
     * // Create one NarrativeNode
     * const NarrativeNode = await prisma.narrativeNode.create({
     *   data: {
     *     // ... data to create a NarrativeNode
     *   }
     * })
     * 
     */
    create<T extends NarrativeNodeCreateArgs>(args: SelectSubset<T, NarrativeNodeCreateArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NarrativeNodes.
     * @param {NarrativeNodeCreateManyArgs} args - Arguments to create many NarrativeNodes.
     * @example
     * // Create many NarrativeNodes
     * const narrativeNode = await prisma.narrativeNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NarrativeNodeCreateManyArgs>(args?: SelectSubset<T, NarrativeNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NarrativeNodes and returns the data saved in the database.
     * @param {NarrativeNodeCreateManyAndReturnArgs} args - Arguments to create many NarrativeNodes.
     * @example
     * // Create many NarrativeNodes
     * const narrativeNode = await prisma.narrativeNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NarrativeNodes and only return the `id`
     * const narrativeNodeWithIdOnly = await prisma.narrativeNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NarrativeNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, NarrativeNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NarrativeNode.
     * @param {NarrativeNodeDeleteArgs} args - Arguments to delete one NarrativeNode.
     * @example
     * // Delete one NarrativeNode
     * const NarrativeNode = await prisma.narrativeNode.delete({
     *   where: {
     *     // ... filter to delete one NarrativeNode
     *   }
     * })
     * 
     */
    delete<T extends NarrativeNodeDeleteArgs>(args: SelectSubset<T, NarrativeNodeDeleteArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NarrativeNode.
     * @param {NarrativeNodeUpdateArgs} args - Arguments to update one NarrativeNode.
     * @example
     * // Update one NarrativeNode
     * const narrativeNode = await prisma.narrativeNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NarrativeNodeUpdateArgs>(args: SelectSubset<T, NarrativeNodeUpdateArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NarrativeNodes.
     * @param {NarrativeNodeDeleteManyArgs} args - Arguments to filter NarrativeNodes to delete.
     * @example
     * // Delete a few NarrativeNodes
     * const { count } = await prisma.narrativeNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NarrativeNodeDeleteManyArgs>(args?: SelectSubset<T, NarrativeNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NarrativeNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NarrativeNodes
     * const narrativeNode = await prisma.narrativeNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NarrativeNodeUpdateManyArgs>(args: SelectSubset<T, NarrativeNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NarrativeNodes and returns the data updated in the database.
     * @param {NarrativeNodeUpdateManyAndReturnArgs} args - Arguments to update many NarrativeNodes.
     * @example
     * // Update many NarrativeNodes
     * const narrativeNode = await prisma.narrativeNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NarrativeNodes and only return the `id`
     * const narrativeNodeWithIdOnly = await prisma.narrativeNode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NarrativeNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, NarrativeNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NarrativeNode.
     * @param {NarrativeNodeUpsertArgs} args - Arguments to update or create a NarrativeNode.
     * @example
     * // Update or create a NarrativeNode
     * const narrativeNode = await prisma.narrativeNode.upsert({
     *   create: {
     *     // ... data to create a NarrativeNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NarrativeNode we want to update
     *   }
     * })
     */
    upsert<T extends NarrativeNodeUpsertArgs>(args: SelectSubset<T, NarrativeNodeUpsertArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NarrativeNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeNodeCountArgs} args - Arguments to filter NarrativeNodes to count.
     * @example
     * // Count the number of NarrativeNodes
     * const count = await prisma.narrativeNode.count({
     *   where: {
     *     // ... the filter for the NarrativeNodes we want to count
     *   }
     * })
    **/
    count<T extends NarrativeNodeCountArgs>(
      args?: Subset<T, NarrativeNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NarrativeNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NarrativeNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NarrativeNodeAggregateArgs>(args: Subset<T, NarrativeNodeAggregateArgs>): Prisma.PrismaPromise<GetNarrativeNodeAggregateType<T>>

    /**
     * Group by NarrativeNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeNodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NarrativeNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NarrativeNodeGroupByArgs['orderBy'] }
        : { orderBy?: NarrativeNodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NarrativeNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNarrativeNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NarrativeNode model
   */
  readonly fields: NarrativeNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NarrativeNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NarrativeNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    choices<T extends NarrativeNode$choicesArgs<ExtArgs> = {}>(args?: Subset<T, NarrativeNode$choicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomingChoices<T extends NarrativeNode$incomingChoicesArgs<ExtArgs> = {}>(args?: Subset<T, NarrativeNode$incomingChoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameStatesAsCurrent<T extends NarrativeNode$gameStatesAsCurrentArgs<ExtArgs> = {}>(args?: Subset<T, NarrativeNode$gameStatesAsCurrentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameStatesAsStart<T extends NarrativeNode$gameStatesAsStartArgs<ExtArgs> = {}>(args?: Subset<T, NarrativeNode$gameStatesAsStartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameSettingAsStart<T extends NarrativeNode$gameSettingAsStartArgs<ExtArgs> = {}>(args?: Subset<T, NarrativeNode$gameSettingAsStartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NarrativeNode model
   */
  interface NarrativeNodeFieldRefs {
    readonly id: FieldRef<"NarrativeNode", 'String'>
    readonly title: FieldRef<"NarrativeNode", 'String'>
    readonly text: FieldRef<"NarrativeNode", 'String'>
    readonly imageUrl: FieldRef<"NarrativeNode", 'String'>
    readonly createdAt: FieldRef<"NarrativeNode", 'DateTime'>
    readonly updatedAt: FieldRef<"NarrativeNode", 'DateTime'>
    readonly challengeType: FieldRef<"NarrativeNode", 'String'>
    readonly challengeIdInternal: FieldRef<"NarrativeNode", 'String'>
    readonly onSuccessNodeId: FieldRef<"NarrativeNode", 'String'>
    readonly onFailureNodeId: FieldRef<"NarrativeNode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NarrativeNode findUnique
   */
  export type NarrativeNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    /**
     * Filter, which NarrativeNode to fetch.
     */
    where: NarrativeNodeWhereUniqueInput
  }

  /**
   * NarrativeNode findUniqueOrThrow
   */
  export type NarrativeNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    /**
     * Filter, which NarrativeNode to fetch.
     */
    where: NarrativeNodeWhereUniqueInput
  }

  /**
   * NarrativeNode findFirst
   */
  export type NarrativeNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    /**
     * Filter, which NarrativeNode to fetch.
     */
    where?: NarrativeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NarrativeNodes to fetch.
     */
    orderBy?: NarrativeNodeOrderByWithRelationInput | NarrativeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NarrativeNodes.
     */
    cursor?: NarrativeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NarrativeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NarrativeNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NarrativeNodes.
     */
    distinct?: NarrativeNodeScalarFieldEnum | NarrativeNodeScalarFieldEnum[]
  }

  /**
   * NarrativeNode findFirstOrThrow
   */
  export type NarrativeNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    /**
     * Filter, which NarrativeNode to fetch.
     */
    where?: NarrativeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NarrativeNodes to fetch.
     */
    orderBy?: NarrativeNodeOrderByWithRelationInput | NarrativeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NarrativeNodes.
     */
    cursor?: NarrativeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NarrativeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NarrativeNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NarrativeNodes.
     */
    distinct?: NarrativeNodeScalarFieldEnum | NarrativeNodeScalarFieldEnum[]
  }

  /**
   * NarrativeNode findMany
   */
  export type NarrativeNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    /**
     * Filter, which NarrativeNodes to fetch.
     */
    where?: NarrativeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NarrativeNodes to fetch.
     */
    orderBy?: NarrativeNodeOrderByWithRelationInput | NarrativeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NarrativeNodes.
     */
    cursor?: NarrativeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NarrativeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NarrativeNodes.
     */
    skip?: number
    distinct?: NarrativeNodeScalarFieldEnum | NarrativeNodeScalarFieldEnum[]
  }

  /**
   * NarrativeNode create
   */
  export type NarrativeNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a NarrativeNode.
     */
    data: XOR<NarrativeNodeCreateInput, NarrativeNodeUncheckedCreateInput>
  }

  /**
   * NarrativeNode createMany
   */
  export type NarrativeNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NarrativeNodes.
     */
    data: NarrativeNodeCreateManyInput | NarrativeNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NarrativeNode createManyAndReturn
   */
  export type NarrativeNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * The data used to create many NarrativeNodes.
     */
    data: NarrativeNodeCreateManyInput | NarrativeNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NarrativeNode update
   */
  export type NarrativeNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a NarrativeNode.
     */
    data: XOR<NarrativeNodeUpdateInput, NarrativeNodeUncheckedUpdateInput>
    /**
     * Choose, which NarrativeNode to update.
     */
    where: NarrativeNodeWhereUniqueInput
  }

  /**
   * NarrativeNode updateMany
   */
  export type NarrativeNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NarrativeNodes.
     */
    data: XOR<NarrativeNodeUpdateManyMutationInput, NarrativeNodeUncheckedUpdateManyInput>
    /**
     * Filter which NarrativeNodes to update
     */
    where?: NarrativeNodeWhereInput
    /**
     * Limit how many NarrativeNodes to update.
     */
    limit?: number
  }

  /**
   * NarrativeNode updateManyAndReturn
   */
  export type NarrativeNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * The data used to update NarrativeNodes.
     */
    data: XOR<NarrativeNodeUpdateManyMutationInput, NarrativeNodeUncheckedUpdateManyInput>
    /**
     * Filter which NarrativeNodes to update
     */
    where?: NarrativeNodeWhereInput
    /**
     * Limit how many NarrativeNodes to update.
     */
    limit?: number
  }

  /**
   * NarrativeNode upsert
   */
  export type NarrativeNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the NarrativeNode to update in case it exists.
     */
    where: NarrativeNodeWhereUniqueInput
    /**
     * In case the NarrativeNode found by the `where` argument doesn't exist, create a new NarrativeNode with this data.
     */
    create: XOR<NarrativeNodeCreateInput, NarrativeNodeUncheckedCreateInput>
    /**
     * In case the NarrativeNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NarrativeNodeUpdateInput, NarrativeNodeUncheckedUpdateInput>
  }

  /**
   * NarrativeNode delete
   */
  export type NarrativeNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
    /**
     * Filter which NarrativeNode to delete.
     */
    where: NarrativeNodeWhereUniqueInput
  }

  /**
   * NarrativeNode deleteMany
   */
  export type NarrativeNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NarrativeNodes to delete
     */
    where?: NarrativeNodeWhereInput
    /**
     * Limit how many NarrativeNodes to delete.
     */
    limit?: number
  }

  /**
   * NarrativeNode.choices
   */
  export type NarrativeNode$choicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    where?: ChoiceWhereInput
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    cursor?: ChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * NarrativeNode.incomingChoices
   */
  export type NarrativeNode$incomingChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    where?: ChoiceWhereInput
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    cursor?: ChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * NarrativeNode.gameStatesAsCurrent
   */
  export type NarrativeNode$gameStatesAsCurrentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    where?: GameStateWhereInput
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    cursor?: GameStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameStateScalarFieldEnum | GameStateScalarFieldEnum[]
  }

  /**
   * NarrativeNode.gameStatesAsStart
   */
  export type NarrativeNode$gameStatesAsStartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    where?: GameStateWhereInput
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    cursor?: GameStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameStateScalarFieldEnum | GameStateScalarFieldEnum[]
  }

  /**
   * NarrativeNode.gameSettingAsStart
   */
  export type NarrativeNode$gameSettingAsStartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSetting
     */
    select?: GameSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSetting
     */
    omit?: GameSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSettingInclude<ExtArgs> | null
    where?: GameSettingWhereInput
    orderBy?: GameSettingOrderByWithRelationInput | GameSettingOrderByWithRelationInput[]
    cursor?: GameSettingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSettingScalarFieldEnum | GameSettingScalarFieldEnum[]
  }

  /**
   * NarrativeNode without action
   */
  export type NarrativeNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeNode
     */
    select?: NarrativeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeNode
     */
    omit?: NarrativeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeNodeInclude<ExtArgs> | null
  }


  /**
   * Model Choice
   */

  export type AggregateChoice = {
    _count: ChoiceCountAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  export type ChoiceMinAggregateOutputType = {
    id: string | null
    text: string | null
    sourceNodeId: string | null
    nextNodeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoiceMaxAggregateOutputType = {
    id: string | null
    text: string | null
    sourceNodeId: string | null
    nextNodeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoiceCountAggregateOutputType = {
    id: number
    text: number
    sourceNodeId: number
    nextNodeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChoiceMinAggregateInputType = {
    id?: true
    text?: true
    sourceNodeId?: true
    nextNodeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoiceMaxAggregateInputType = {
    id?: true
    text?: true
    sourceNodeId?: true
    nextNodeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoiceCountAggregateInputType = {
    id?: true
    text?: true
    sourceNodeId?: true
    nextNodeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choice to aggregate.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Choices
    **/
    _count?: true | ChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoiceMaxAggregateInputType
  }

  export type GetChoiceAggregateType<T extends ChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoice[P]>
      : GetScalarType<T[P], AggregateChoice[P]>
  }




  export type ChoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoiceWhereInput
    orderBy?: ChoiceOrderByWithAggregationInput | ChoiceOrderByWithAggregationInput[]
    by: ChoiceScalarFieldEnum[] | ChoiceScalarFieldEnum
    having?: ChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoiceCountAggregateInputType | true
    _min?: ChoiceMinAggregateInputType
    _max?: ChoiceMaxAggregateInputType
  }

  export type ChoiceGroupByOutputType = {
    id: string
    text: string
    sourceNodeId: string
    nextNodeId: string
    createdAt: Date
    updatedAt: Date
    _count: ChoiceCountAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  type GetChoiceGroupByPayload<T extends ChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
        }
      >
    >


  export type ChoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    sourceNodeId?: boolean
    nextNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
    nextNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>

  export type ChoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    sourceNodeId?: boolean
    nextNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
    nextNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>

  export type ChoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    sourceNodeId?: boolean
    nextNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
    nextNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>

  export type ChoiceSelectScalar = {
    id?: boolean
    text?: boolean
    sourceNodeId?: boolean
    nextNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "sourceNodeId" | "nextNodeId" | "createdAt" | "updatedAt", ExtArgs["result"]["choice"]>
  export type ChoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
    nextNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
  }
  export type ChoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
    nextNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
  }
  export type ChoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
    nextNode?: boolean | NarrativeNodeDefaultArgs<ExtArgs>
  }

  export type $ChoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Choice"
    objects: {
      sourceNode: Prisma.$NarrativeNodePayload<ExtArgs>
      nextNode: Prisma.$NarrativeNodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      sourceNodeId: string
      nextNodeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["choice"]>
    composites: {}
  }

  type ChoiceGetPayload<S extends boolean | null | undefined | ChoiceDefaultArgs> = $Result.GetResult<Prisma.$ChoicePayload, S>

  type ChoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoiceCountAggregateInputType | true
    }

  export interface ChoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Choice'], meta: { name: 'Choice' } }
    /**
     * Find zero or one Choice that matches the filter.
     * @param {ChoiceFindUniqueArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoiceFindUniqueArgs>(args: SelectSubset<T, ChoiceFindUniqueArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Choice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoiceFindUniqueOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoiceFindFirstArgs>(args?: SelectSubset<T, ChoiceFindFirstArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Choices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choices
     * const choices = await prisma.choice.findMany()
     * 
     * // Get first 10 Choices
     * const choices = await prisma.choice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choiceWithIdOnly = await prisma.choice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoiceFindManyArgs>(args?: SelectSubset<T, ChoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Choice.
     * @param {ChoiceCreateArgs} args - Arguments to create a Choice.
     * @example
     * // Create one Choice
     * const Choice = await prisma.choice.create({
     *   data: {
     *     // ... data to create a Choice
     *   }
     * })
     * 
     */
    create<T extends ChoiceCreateArgs>(args: SelectSubset<T, ChoiceCreateArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Choices.
     * @param {ChoiceCreateManyArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choice = await prisma.choice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoiceCreateManyArgs>(args?: SelectSubset<T, ChoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Choices and returns the data saved in the database.
     * @param {ChoiceCreateManyAndReturnArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choice = await prisma.choice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Choices and only return the `id`
     * const choiceWithIdOnly = await prisma.choice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Choice.
     * @param {ChoiceDeleteArgs} args - Arguments to delete one Choice.
     * @example
     * // Delete one Choice
     * const Choice = await prisma.choice.delete({
     *   where: {
     *     // ... filter to delete one Choice
     *   }
     * })
     * 
     */
    delete<T extends ChoiceDeleteArgs>(args: SelectSubset<T, ChoiceDeleteArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Choice.
     * @param {ChoiceUpdateArgs} args - Arguments to update one Choice.
     * @example
     * // Update one Choice
     * const choice = await prisma.choice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoiceUpdateArgs>(args: SelectSubset<T, ChoiceUpdateArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Choices.
     * @param {ChoiceDeleteManyArgs} args - Arguments to filter Choices to delete.
     * @example
     * // Delete a few Choices
     * const { count } = await prisma.choice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoiceDeleteManyArgs>(args?: SelectSubset<T, ChoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choices
     * const choice = await prisma.choice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoiceUpdateManyArgs>(args: SelectSubset<T, ChoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choices and returns the data updated in the database.
     * @param {ChoiceUpdateManyAndReturnArgs} args - Arguments to update many Choices.
     * @example
     * // Update many Choices
     * const choice = await prisma.choice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Choices and only return the `id`
     * const choiceWithIdOnly = await prisma.choice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ChoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Choice.
     * @param {ChoiceUpsertArgs} args - Arguments to update or create a Choice.
     * @example
     * // Update or create a Choice
     * const choice = await prisma.choice.upsert({
     *   create: {
     *     // ... data to create a Choice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choice we want to update
     *   }
     * })
     */
    upsert<T extends ChoiceUpsertArgs>(args: SelectSubset<T, ChoiceUpsertArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceCountArgs} args - Arguments to filter Choices to count.
     * @example
     * // Count the number of Choices
     * const count = await prisma.choice.count({
     *   where: {
     *     // ... the filter for the Choices we want to count
     *   }
     * })
    **/
    count<T extends ChoiceCountArgs>(
      args?: Subset<T, ChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoiceAggregateArgs>(args: Subset<T, ChoiceAggregateArgs>): Prisma.PrismaPromise<GetChoiceAggregateType<T>>

    /**
     * Group by Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoiceGroupByArgs['orderBy'] }
        : { orderBy?: ChoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Choice model
   */
  readonly fields: ChoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Choice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceNode<T extends NarrativeNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NarrativeNodeDefaultArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nextNode<T extends NarrativeNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NarrativeNodeDefaultArgs<ExtArgs>>): Prisma__NarrativeNodeClient<$Result.GetResult<Prisma.$NarrativeNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Choice model
   */
  interface ChoiceFieldRefs {
    readonly id: FieldRef<"Choice", 'String'>
    readonly text: FieldRef<"Choice", 'String'>
    readonly sourceNodeId: FieldRef<"Choice", 'String'>
    readonly nextNodeId: FieldRef<"Choice", 'String'>
    readonly createdAt: FieldRef<"Choice", 'DateTime'>
    readonly updatedAt: FieldRef<"Choice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Choice findUnique
   */
  export type ChoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice findUniqueOrThrow
   */
  export type ChoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice findFirst
   */
  export type ChoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice findFirstOrThrow
   */
  export type ChoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice findMany
   */
  export type ChoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choices to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice create
   */
  export type ChoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Choice.
     */
    data: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
  }

  /**
   * Choice createMany
   */
  export type ChoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Choices.
     */
    data: ChoiceCreateManyInput | ChoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Choice createManyAndReturn
   */
  export type ChoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Choices.
     */
    data: ChoiceCreateManyInput | ChoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Choice update
   */
  export type ChoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Choice.
     */
    data: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
    /**
     * Choose, which Choice to update.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice updateMany
   */
  export type ChoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Choices.
     */
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyInput>
    /**
     * Filter which Choices to update
     */
    where?: ChoiceWhereInput
    /**
     * Limit how many Choices to update.
     */
    limit?: number
  }

  /**
   * Choice updateManyAndReturn
   */
  export type ChoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * The data used to update Choices.
     */
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyInput>
    /**
     * Filter which Choices to update
     */
    where?: ChoiceWhereInput
    /**
     * Limit how many Choices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Choice upsert
   */
  export type ChoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Choice to update in case it exists.
     */
    where: ChoiceWhereUniqueInput
    /**
     * In case the Choice found by the `where` argument doesn't exist, create a new Choice with this data.
     */
    create: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
    /**
     * In case the Choice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
  }

  /**
   * Choice delete
   */
  export type ChoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter which Choice to delete.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice deleteMany
   */
  export type ChoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choices to delete
     */
    where?: ChoiceWhereInput
    /**
     * Limit how many Choices to delete.
     */
    limit?: number
  }

  /**
   * Choice without action
   */
  export type ChoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GameStateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currentScore: 'currentScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    currentNodeId: 'currentNodeId',
    startNodeId: 'startNodeId',
    stateData: 'stateData'
  };

  export type GameStateScalarFieldEnum = (typeof GameStateScalarFieldEnum)[keyof typeof GameStateScalarFieldEnum]


  export const GameSettingScalarFieldEnum: {
    id: 'id',
    settingName: 'settingName',
    startNodeId: 'startNodeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameSettingScalarFieldEnum = (typeof GameSettingScalarFieldEnum)[keyof typeof GameSettingScalarFieldEnum]


  export const NarrativeNodeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    challengeType: 'challengeType',
    challengeIdInternal: 'challengeIdInternal',
    onSuccessNodeId: 'onSuccessNodeId',
    onFailureNodeId: 'onFailureNodeId'
  };

  export type NarrativeNodeScalarFieldEnum = (typeof NarrativeNodeScalarFieldEnum)[keyof typeof NarrativeNodeScalarFieldEnum]


  export const ChoiceScalarFieldEnum: {
    id: 'id',
    text: 'text',
    sourceNodeId: 'sourceNodeId',
    nextNodeId: 'nextNodeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChoiceScalarFieldEnum = (typeof ChoiceScalarFieldEnum)[keyof typeof ChoiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    gameStates?: GameStateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameStates?: GameStateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    gameStates?: GameStateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GameStateWhereInput = {
    AND?: GameStateWhereInput | GameStateWhereInput[]
    OR?: GameStateWhereInput[]
    NOT?: GameStateWhereInput | GameStateWhereInput[]
    id?: StringFilter<"GameState"> | string
    userId?: StringFilter<"GameState"> | string
    currentScore?: IntFilter<"GameState"> | number
    createdAt?: DateTimeFilter<"GameState"> | Date | string
    updatedAt?: DateTimeFilter<"GameState"> | Date | string
    currentNodeId?: StringNullableFilter<"GameState"> | string | null
    startNodeId?: StringNullableFilter<"GameState"> | string | null
    stateData?: JsonNullableFilter<"GameState">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    currentNode?: XOR<NarrativeNodeNullableScalarRelationFilter, NarrativeNodeWhereInput> | null
    startNode?: XOR<NarrativeNodeNullableScalarRelationFilter, NarrativeNodeWhereInput> | null
  }

  export type GameStateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentNodeId?: SortOrderInput | SortOrder
    startNodeId?: SortOrderInput | SortOrder
    stateData?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    currentNode?: NarrativeNodeOrderByWithRelationInput
    startNode?: NarrativeNodeOrderByWithRelationInput
  }

  export type GameStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: GameStateWhereInput | GameStateWhereInput[]
    OR?: GameStateWhereInput[]
    NOT?: GameStateWhereInput | GameStateWhereInput[]
    currentScore?: IntFilter<"GameState"> | number
    createdAt?: DateTimeFilter<"GameState"> | Date | string
    updatedAt?: DateTimeFilter<"GameState"> | Date | string
    currentNodeId?: StringNullableFilter<"GameState"> | string | null
    startNodeId?: StringNullableFilter<"GameState"> | string | null
    stateData?: JsonNullableFilter<"GameState">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    currentNode?: XOR<NarrativeNodeNullableScalarRelationFilter, NarrativeNodeWhereInput> | null
    startNode?: XOR<NarrativeNodeNullableScalarRelationFilter, NarrativeNodeWhereInput> | null
  }, "id" | "userId">

  export type GameStateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentNodeId?: SortOrderInput | SortOrder
    startNodeId?: SortOrderInput | SortOrder
    stateData?: SortOrderInput | SortOrder
    _count?: GameStateCountOrderByAggregateInput
    _avg?: GameStateAvgOrderByAggregateInput
    _max?: GameStateMaxOrderByAggregateInput
    _min?: GameStateMinOrderByAggregateInput
    _sum?: GameStateSumOrderByAggregateInput
  }

  export type GameStateScalarWhereWithAggregatesInput = {
    AND?: GameStateScalarWhereWithAggregatesInput | GameStateScalarWhereWithAggregatesInput[]
    OR?: GameStateScalarWhereWithAggregatesInput[]
    NOT?: GameStateScalarWhereWithAggregatesInput | GameStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameState"> | string
    userId?: StringWithAggregatesFilter<"GameState"> | string
    currentScore?: IntWithAggregatesFilter<"GameState"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GameState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameState"> | Date | string
    currentNodeId?: StringNullableWithAggregatesFilter<"GameState"> | string | null
    startNodeId?: StringNullableWithAggregatesFilter<"GameState"> | string | null
    stateData?: JsonNullableWithAggregatesFilter<"GameState">
  }

  export type GameSettingWhereInput = {
    AND?: GameSettingWhereInput | GameSettingWhereInput[]
    OR?: GameSettingWhereInput[]
    NOT?: GameSettingWhereInput | GameSettingWhereInput[]
    id?: StringFilter<"GameSetting"> | string
    settingName?: StringFilter<"GameSetting"> | string
    startNodeId?: StringNullableFilter<"GameSetting"> | string | null
    createdAt?: DateTimeFilter<"GameSetting"> | Date | string
    updatedAt?: DateTimeFilter<"GameSetting"> | Date | string
    startNode?: XOR<NarrativeNodeNullableScalarRelationFilter, NarrativeNodeWhereInput> | null
  }

  export type GameSettingOrderByWithRelationInput = {
    id?: SortOrder
    settingName?: SortOrder
    startNodeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startNode?: NarrativeNodeOrderByWithRelationInput
  }

  export type GameSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    settingName?: string
    AND?: GameSettingWhereInput | GameSettingWhereInput[]
    OR?: GameSettingWhereInput[]
    NOT?: GameSettingWhereInput | GameSettingWhereInput[]
    startNodeId?: StringNullableFilter<"GameSetting"> | string | null
    createdAt?: DateTimeFilter<"GameSetting"> | Date | string
    updatedAt?: DateTimeFilter<"GameSetting"> | Date | string
    startNode?: XOR<NarrativeNodeNullableScalarRelationFilter, NarrativeNodeWhereInput> | null
  }, "id" | "settingName">

  export type GameSettingOrderByWithAggregationInput = {
    id?: SortOrder
    settingName?: SortOrder
    startNodeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameSettingCountOrderByAggregateInput
    _max?: GameSettingMaxOrderByAggregateInput
    _min?: GameSettingMinOrderByAggregateInput
  }

  export type GameSettingScalarWhereWithAggregatesInput = {
    AND?: GameSettingScalarWhereWithAggregatesInput | GameSettingScalarWhereWithAggregatesInput[]
    OR?: GameSettingScalarWhereWithAggregatesInput[]
    NOT?: GameSettingScalarWhereWithAggregatesInput | GameSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameSetting"> | string
    settingName?: StringWithAggregatesFilter<"GameSetting"> | string
    startNodeId?: StringNullableWithAggregatesFilter<"GameSetting"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GameSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameSetting"> | Date | string
  }

  export type NarrativeNodeWhereInput = {
    AND?: NarrativeNodeWhereInput | NarrativeNodeWhereInput[]
    OR?: NarrativeNodeWhereInput[]
    NOT?: NarrativeNodeWhereInput | NarrativeNodeWhereInput[]
    id?: StringFilter<"NarrativeNode"> | string
    title?: StringFilter<"NarrativeNode"> | string
    text?: StringFilter<"NarrativeNode"> | string
    imageUrl?: StringNullableFilter<"NarrativeNode"> | string | null
    createdAt?: DateTimeFilter<"NarrativeNode"> | Date | string
    updatedAt?: DateTimeFilter<"NarrativeNode"> | Date | string
    challengeType?: StringNullableFilter<"NarrativeNode"> | string | null
    challengeIdInternal?: StringNullableFilter<"NarrativeNode"> | string | null
    onSuccessNodeId?: StringNullableFilter<"NarrativeNode"> | string | null
    onFailureNodeId?: StringNullableFilter<"NarrativeNode"> | string | null
    choices?: ChoiceListRelationFilter
    incomingChoices?: ChoiceListRelationFilter
    gameStatesAsCurrent?: GameStateListRelationFilter
    gameStatesAsStart?: GameStateListRelationFilter
    gameSettingAsStart?: GameSettingListRelationFilter
  }

  export type NarrativeNodeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeType?: SortOrderInput | SortOrder
    challengeIdInternal?: SortOrderInput | SortOrder
    onSuccessNodeId?: SortOrderInput | SortOrder
    onFailureNodeId?: SortOrderInput | SortOrder
    choices?: ChoiceOrderByRelationAggregateInput
    incomingChoices?: ChoiceOrderByRelationAggregateInput
    gameStatesAsCurrent?: GameStateOrderByRelationAggregateInput
    gameStatesAsStart?: GameStateOrderByRelationAggregateInput
    gameSettingAsStart?: GameSettingOrderByRelationAggregateInput
  }

  export type NarrativeNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: NarrativeNodeWhereInput | NarrativeNodeWhereInput[]
    OR?: NarrativeNodeWhereInput[]
    NOT?: NarrativeNodeWhereInput | NarrativeNodeWhereInput[]
    text?: StringFilter<"NarrativeNode"> | string
    imageUrl?: StringNullableFilter<"NarrativeNode"> | string | null
    createdAt?: DateTimeFilter<"NarrativeNode"> | Date | string
    updatedAt?: DateTimeFilter<"NarrativeNode"> | Date | string
    challengeType?: StringNullableFilter<"NarrativeNode"> | string | null
    challengeIdInternal?: StringNullableFilter<"NarrativeNode"> | string | null
    onSuccessNodeId?: StringNullableFilter<"NarrativeNode"> | string | null
    onFailureNodeId?: StringNullableFilter<"NarrativeNode"> | string | null
    choices?: ChoiceListRelationFilter
    incomingChoices?: ChoiceListRelationFilter
    gameStatesAsCurrent?: GameStateListRelationFilter
    gameStatesAsStart?: GameStateListRelationFilter
    gameSettingAsStart?: GameSettingListRelationFilter
  }, "id" | "title">

  export type NarrativeNodeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeType?: SortOrderInput | SortOrder
    challengeIdInternal?: SortOrderInput | SortOrder
    onSuccessNodeId?: SortOrderInput | SortOrder
    onFailureNodeId?: SortOrderInput | SortOrder
    _count?: NarrativeNodeCountOrderByAggregateInput
    _max?: NarrativeNodeMaxOrderByAggregateInput
    _min?: NarrativeNodeMinOrderByAggregateInput
  }

  export type NarrativeNodeScalarWhereWithAggregatesInput = {
    AND?: NarrativeNodeScalarWhereWithAggregatesInput | NarrativeNodeScalarWhereWithAggregatesInput[]
    OR?: NarrativeNodeScalarWhereWithAggregatesInput[]
    NOT?: NarrativeNodeScalarWhereWithAggregatesInput | NarrativeNodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NarrativeNode"> | string
    title?: StringWithAggregatesFilter<"NarrativeNode"> | string
    text?: StringWithAggregatesFilter<"NarrativeNode"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"NarrativeNode"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NarrativeNode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NarrativeNode"> | Date | string
    challengeType?: StringNullableWithAggregatesFilter<"NarrativeNode"> | string | null
    challengeIdInternal?: StringNullableWithAggregatesFilter<"NarrativeNode"> | string | null
    onSuccessNodeId?: StringNullableWithAggregatesFilter<"NarrativeNode"> | string | null
    onFailureNodeId?: StringNullableWithAggregatesFilter<"NarrativeNode"> | string | null
  }

  export type ChoiceWhereInput = {
    AND?: ChoiceWhereInput | ChoiceWhereInput[]
    OR?: ChoiceWhereInput[]
    NOT?: ChoiceWhereInput | ChoiceWhereInput[]
    id?: StringFilter<"Choice"> | string
    text?: StringFilter<"Choice"> | string
    sourceNodeId?: StringFilter<"Choice"> | string
    nextNodeId?: StringFilter<"Choice"> | string
    createdAt?: DateTimeFilter<"Choice"> | Date | string
    updatedAt?: DateTimeFilter<"Choice"> | Date | string
    sourceNode?: XOR<NarrativeNodeScalarRelationFilter, NarrativeNodeWhereInput>
    nextNode?: XOR<NarrativeNodeScalarRelationFilter, NarrativeNodeWhereInput>
  }

  export type ChoiceOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    sourceNodeId?: SortOrder
    nextNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceNode?: NarrativeNodeOrderByWithRelationInput
    nextNode?: NarrativeNodeOrderByWithRelationInput
  }

  export type ChoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChoiceWhereInput | ChoiceWhereInput[]
    OR?: ChoiceWhereInput[]
    NOT?: ChoiceWhereInput | ChoiceWhereInput[]
    text?: StringFilter<"Choice"> | string
    sourceNodeId?: StringFilter<"Choice"> | string
    nextNodeId?: StringFilter<"Choice"> | string
    createdAt?: DateTimeFilter<"Choice"> | Date | string
    updatedAt?: DateTimeFilter<"Choice"> | Date | string
    sourceNode?: XOR<NarrativeNodeScalarRelationFilter, NarrativeNodeWhereInput>
    nextNode?: XOR<NarrativeNodeScalarRelationFilter, NarrativeNodeWhereInput>
  }, "id">

  export type ChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    sourceNodeId?: SortOrder
    nextNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChoiceCountOrderByAggregateInput
    _max?: ChoiceMaxOrderByAggregateInput
    _min?: ChoiceMinOrderByAggregateInput
  }

  export type ChoiceScalarWhereWithAggregatesInput = {
    AND?: ChoiceScalarWhereWithAggregatesInput | ChoiceScalarWhereWithAggregatesInput[]
    OR?: ChoiceScalarWhereWithAggregatesInput[]
    NOT?: ChoiceScalarWhereWithAggregatesInput | ChoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Choice"> | string
    text?: StringWithAggregatesFilter<"Choice"> | string
    sourceNodeId?: StringWithAggregatesFilter<"Choice"> | string
    nextNodeId?: StringWithAggregatesFilter<"Choice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Choice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Choice"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gameStates?: GameStateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gameStates?: GameStateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameStates?: GameStateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameStates?: GameStateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameStateCreateInput = {
    id?: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stateData?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutGameStatesInput
    currentNode?: NarrativeNodeCreateNestedOneWithoutGameStatesAsCurrentInput
    startNode?: NarrativeNodeCreateNestedOneWithoutGameStatesAsStartInput
  }

  export type GameStateUncheckedCreateInput = {
    id?: string
    userId: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    currentNodeId?: string | null
    startNodeId?: string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stateData?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutGameStatesNestedInput
    currentNode?: NarrativeNodeUpdateOneWithoutGameStatesAsCurrentNestedInput
    startNode?: NarrativeNodeUpdateOneWithoutGameStatesAsStartNestedInput
  }

  export type GameStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateCreateManyInput = {
    id?: string
    userId: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    currentNodeId?: string | null
    startNodeId?: string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameSettingCreateInput = {
    id?: string
    settingName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startNode?: NarrativeNodeCreateNestedOneWithoutGameSettingAsStartInput
  }

  export type GameSettingUncheckedCreateInput = {
    id?: string
    settingName: string
    startNodeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startNode?: NarrativeNodeUpdateOneWithoutGameSettingAsStartNestedInput
  }

  export type GameSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingName?: StringFieldUpdateOperationsInput | string
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSettingCreateManyInput = {
    id?: string
    settingName: string
    startNodeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingName?: StringFieldUpdateOperationsInput | string
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrativeNodeCreateInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    choices?: ChoiceCreateNestedManyWithoutSourceNodeInput
    incomingChoices?: ChoiceCreateNestedManyWithoutNextNodeInput
    gameStatesAsCurrent?: GameStateCreateNestedManyWithoutCurrentNodeInput
    gameStatesAsStart?: GameStateCreateNestedManyWithoutStartNodeInput
    gameSettingAsStart?: GameSettingCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeUncheckedCreateInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    choices?: ChoiceUncheckedCreateNestedManyWithoutSourceNodeInput
    incomingChoices?: ChoiceUncheckedCreateNestedManyWithoutNextNodeInput
    gameStatesAsCurrent?: GameStateUncheckedCreateNestedManyWithoutCurrentNodeInput
    gameStatesAsStart?: GameStateUncheckedCreateNestedManyWithoutStartNodeInput
    gameSettingAsStart?: GameSettingUncheckedCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    choices?: ChoiceUpdateManyWithoutSourceNodeNestedInput
    incomingChoices?: ChoiceUpdateManyWithoutNextNodeNestedInput
    gameStatesAsCurrent?: GameStateUpdateManyWithoutCurrentNodeNestedInput
    gameStatesAsStart?: GameStateUpdateManyWithoutStartNodeNestedInput
    gameSettingAsStart?: GameSettingUpdateManyWithoutStartNodeNestedInput
  }

  export type NarrativeNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    choices?: ChoiceUncheckedUpdateManyWithoutSourceNodeNestedInput
    incomingChoices?: ChoiceUncheckedUpdateManyWithoutNextNodeNestedInput
    gameStatesAsCurrent?: GameStateUncheckedUpdateManyWithoutCurrentNodeNestedInput
    gameStatesAsStart?: GameStateUncheckedUpdateManyWithoutStartNodeNestedInput
    gameSettingAsStart?: GameSettingUncheckedUpdateManyWithoutStartNodeNestedInput
  }

  export type NarrativeNodeCreateManyInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
  }

  export type NarrativeNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NarrativeNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChoiceCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceNode: NarrativeNodeCreateNestedOneWithoutChoicesInput
    nextNode: NarrativeNodeCreateNestedOneWithoutIncomingChoicesInput
  }

  export type ChoiceUncheckedCreateInput = {
    id?: string
    text: string
    sourceNodeId: string
    nextNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceNode?: NarrativeNodeUpdateOneRequiredWithoutChoicesNestedInput
    nextNode?: NarrativeNodeUpdateOneRequiredWithoutIncomingChoicesNestedInput
  }

  export type ChoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    nextNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateManyInput = {
    id?: string
    text: string
    sourceNodeId: string
    nextNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    nextNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GameStateListRelationFilter = {
    every?: GameStateWhereInput
    some?: GameStateWhereInput
    none?: GameStateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NarrativeNodeNullableScalarRelationFilter = {
    is?: NarrativeNodeWhereInput | null
    isNot?: NarrativeNodeWhereInput | null
  }

  export type GameStateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentNodeId?: SortOrder
    startNodeId?: SortOrder
    stateData?: SortOrder
  }

  export type GameStateAvgOrderByAggregateInput = {
    currentScore?: SortOrder
  }

  export type GameStateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentNodeId?: SortOrder
    startNodeId?: SortOrder
  }

  export type GameStateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentNodeId?: SortOrder
    startNodeId?: SortOrder
  }

  export type GameStateSumOrderByAggregateInput = {
    currentScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type GameSettingCountOrderByAggregateInput = {
    id?: SortOrder
    settingName?: SortOrder
    startNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    settingName?: SortOrder
    startNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSettingMinOrderByAggregateInput = {
    id?: SortOrder
    settingName?: SortOrder
    startNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceListRelationFilter = {
    every?: ChoiceWhereInput
    some?: ChoiceWhereInput
    none?: ChoiceWhereInput
  }

  export type GameSettingListRelationFilter = {
    every?: GameSettingWhereInput
    some?: GameSettingWhereInput
    none?: GameSettingWhereInput
  }

  export type ChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameSettingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NarrativeNodeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeType?: SortOrder
    challengeIdInternal?: SortOrder
    onSuccessNodeId?: SortOrder
    onFailureNodeId?: SortOrder
  }

  export type NarrativeNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeType?: SortOrder
    challengeIdInternal?: SortOrder
    onSuccessNodeId?: SortOrder
    onFailureNodeId?: SortOrder
  }

  export type NarrativeNodeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeType?: SortOrder
    challengeIdInternal?: SortOrder
    onSuccessNodeId?: SortOrder
    onFailureNodeId?: SortOrder
  }

  export type NarrativeNodeScalarRelationFilter = {
    is?: NarrativeNodeWhereInput
    isNot?: NarrativeNodeWhereInput
  }

  export type ChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    sourceNodeId?: SortOrder
    nextNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    sourceNodeId?: SortOrder
    nextNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    sourceNodeId?: SortOrder
    nextNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameStateCreateNestedManyWithoutUserInput = {
    create?: XOR<GameStateCreateWithoutUserInput, GameStateUncheckedCreateWithoutUserInput> | GameStateCreateWithoutUserInput[] | GameStateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutUserInput | GameStateCreateOrConnectWithoutUserInput[]
    createMany?: GameStateCreateManyUserInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type GameStateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameStateCreateWithoutUserInput, GameStateUncheckedCreateWithoutUserInput> | GameStateCreateWithoutUserInput[] | GameStateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutUserInput | GameStateCreateOrConnectWithoutUserInput[]
    createMany?: GameStateCreateManyUserInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameStateUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameStateCreateWithoutUserInput, GameStateUncheckedCreateWithoutUserInput> | GameStateCreateWithoutUserInput[] | GameStateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutUserInput | GameStateCreateOrConnectWithoutUserInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutUserInput | GameStateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameStateCreateManyUserInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutUserInput | GameStateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutUserInput | GameStateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type GameStateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameStateCreateWithoutUserInput, GameStateUncheckedCreateWithoutUserInput> | GameStateCreateWithoutUserInput[] | GameStateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutUserInput | GameStateCreateOrConnectWithoutUserInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutUserInput | GameStateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameStateCreateManyUserInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutUserInput | GameStateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutUserInput | GameStateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGameStatesInput = {
    create?: XOR<UserCreateWithoutGameStatesInput, UserUncheckedCreateWithoutGameStatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameStatesInput
    connect?: UserWhereUniqueInput
  }

  export type NarrativeNodeCreateNestedOneWithoutGameStatesAsCurrentInput = {
    create?: XOR<NarrativeNodeCreateWithoutGameStatesAsCurrentInput, NarrativeNodeUncheckedCreateWithoutGameStatesAsCurrentInput>
    connectOrCreate?: NarrativeNodeCreateOrConnectWithoutGameStatesAsCurrentInput
    connect?: NarrativeNodeWhereUniqueInput
  }

  export type NarrativeNodeCreateNestedOneWithoutGameStatesAsStartInput = {
    create?: XOR<NarrativeNodeCreateWithoutGameStatesAsStartInput, NarrativeNodeUncheckedCreateWithoutGameStatesAsStartInput>
    connectOrCreate?: NarrativeNodeCreateOrConnectWithoutGameStatesAsStartInput
    connect?: NarrativeNodeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGameStatesNestedInput = {
    create?: XOR<UserCreateWithoutGameStatesInput, UserUncheckedCreateWithoutGameStatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameStatesInput
    upsert?: UserUpsertWithoutGameStatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameStatesInput, UserUpdateWithoutGameStatesInput>, UserUncheckedUpdateWithoutGameStatesInput>
  }

  export type NarrativeNodeUpdateOneWithoutGameStatesAsCurrentNestedInput = {
    create?: XOR<NarrativeNodeCreateWithoutGameStatesAsCurrentInput, NarrativeNodeUncheckedCreateWithoutGameStatesAsCurrentInput>
    connectOrCreate?: NarrativeNodeCreateOrConnectWithoutGameStatesAsCurrentInput
    upsert?: NarrativeNodeUpsertWithoutGameStatesAsCurrentInput
    disconnect?: NarrativeNodeWhereInput | boolean
    delete?: NarrativeNodeWhereInput | boolean
    connect?: NarrativeNodeWhereUniqueInput
    update?: XOR<XOR<NarrativeNodeUpdateToOneWithWhereWithoutGameStatesAsCurrentInput, NarrativeNodeUpdateWithoutGameStatesAsCurrentInput>, NarrativeNodeUncheckedUpdateWithoutGameStatesAsCurrentInput>
  }

  export type NarrativeNodeUpdateOneWithoutGameStatesAsStartNestedInput = {
    create?: XOR<NarrativeNodeCreateWithoutGameStatesAsStartInput, NarrativeNodeUncheckedCreateWithoutGameStatesAsStartInput>
    connectOrCreate?: NarrativeNodeCreateOrConnectWithoutGameStatesAsStartInput
    upsert?: NarrativeNodeUpsertWithoutGameStatesAsStartInput
    disconnect?: NarrativeNodeWhereInput | boolean
    delete?: NarrativeNodeWhereInput | boolean
    connect?: NarrativeNodeWhereUniqueInput
    update?: XOR<XOR<NarrativeNodeUpdateToOneWithWhereWithoutGameStatesAsStartInput, NarrativeNodeUpdateWithoutGameStatesAsStartInput>, NarrativeNodeUncheckedUpdateWithoutGameStatesAsStartInput>
  }

  export type NarrativeNodeCreateNestedOneWithoutGameSettingAsStartInput = {
    create?: XOR<NarrativeNodeCreateWithoutGameSettingAsStartInput, NarrativeNodeUncheckedCreateWithoutGameSettingAsStartInput>
    connectOrCreate?: NarrativeNodeCreateOrConnectWithoutGameSettingAsStartInput
    connect?: NarrativeNodeWhereUniqueInput
  }

  export type NarrativeNodeUpdateOneWithoutGameSettingAsStartNestedInput = {
    create?: XOR<NarrativeNodeCreateWithoutGameSettingAsStartInput, NarrativeNodeUncheckedCreateWithoutGameSettingAsStartInput>
    connectOrCreate?: NarrativeNodeCreateOrConnectWithoutGameSettingAsStartInput
    upsert?: NarrativeNodeUpsertWithoutGameSettingAsStartInput
    disconnect?: NarrativeNodeWhereInput | boolean
    delete?: NarrativeNodeWhereInput | boolean
    connect?: NarrativeNodeWhereUniqueInput
    update?: XOR<XOR<NarrativeNodeUpdateToOneWithWhereWithoutGameSettingAsStartInput, NarrativeNodeUpdateWithoutGameSettingAsStartInput>, NarrativeNodeUncheckedUpdateWithoutGameSettingAsStartInput>
  }

  export type ChoiceCreateNestedManyWithoutSourceNodeInput = {
    create?: XOR<ChoiceCreateWithoutSourceNodeInput, ChoiceUncheckedCreateWithoutSourceNodeInput> | ChoiceCreateWithoutSourceNodeInput[] | ChoiceUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutSourceNodeInput | ChoiceCreateOrConnectWithoutSourceNodeInput[]
    createMany?: ChoiceCreateManySourceNodeInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type ChoiceCreateNestedManyWithoutNextNodeInput = {
    create?: XOR<ChoiceCreateWithoutNextNodeInput, ChoiceUncheckedCreateWithoutNextNodeInput> | ChoiceCreateWithoutNextNodeInput[] | ChoiceUncheckedCreateWithoutNextNodeInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutNextNodeInput | ChoiceCreateOrConnectWithoutNextNodeInput[]
    createMany?: ChoiceCreateManyNextNodeInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type GameStateCreateNestedManyWithoutCurrentNodeInput = {
    create?: XOR<GameStateCreateWithoutCurrentNodeInput, GameStateUncheckedCreateWithoutCurrentNodeInput> | GameStateCreateWithoutCurrentNodeInput[] | GameStateUncheckedCreateWithoutCurrentNodeInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutCurrentNodeInput | GameStateCreateOrConnectWithoutCurrentNodeInput[]
    createMany?: GameStateCreateManyCurrentNodeInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type GameStateCreateNestedManyWithoutStartNodeInput = {
    create?: XOR<GameStateCreateWithoutStartNodeInput, GameStateUncheckedCreateWithoutStartNodeInput> | GameStateCreateWithoutStartNodeInput[] | GameStateUncheckedCreateWithoutStartNodeInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutStartNodeInput | GameStateCreateOrConnectWithoutStartNodeInput[]
    createMany?: GameStateCreateManyStartNodeInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type GameSettingCreateNestedManyWithoutStartNodeInput = {
    create?: XOR<GameSettingCreateWithoutStartNodeInput, GameSettingUncheckedCreateWithoutStartNodeInput> | GameSettingCreateWithoutStartNodeInput[] | GameSettingUncheckedCreateWithoutStartNodeInput[]
    connectOrCreate?: GameSettingCreateOrConnectWithoutStartNodeInput | GameSettingCreateOrConnectWithoutStartNodeInput[]
    createMany?: GameSettingCreateManyStartNodeInputEnvelope
    connect?: GameSettingWhereUniqueInput | GameSettingWhereUniqueInput[]
  }

  export type ChoiceUncheckedCreateNestedManyWithoutSourceNodeInput = {
    create?: XOR<ChoiceCreateWithoutSourceNodeInput, ChoiceUncheckedCreateWithoutSourceNodeInput> | ChoiceCreateWithoutSourceNodeInput[] | ChoiceUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutSourceNodeInput | ChoiceCreateOrConnectWithoutSourceNodeInput[]
    createMany?: ChoiceCreateManySourceNodeInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type ChoiceUncheckedCreateNestedManyWithoutNextNodeInput = {
    create?: XOR<ChoiceCreateWithoutNextNodeInput, ChoiceUncheckedCreateWithoutNextNodeInput> | ChoiceCreateWithoutNextNodeInput[] | ChoiceUncheckedCreateWithoutNextNodeInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutNextNodeInput | ChoiceCreateOrConnectWithoutNextNodeInput[]
    createMany?: ChoiceCreateManyNextNodeInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type GameStateUncheckedCreateNestedManyWithoutCurrentNodeInput = {
    create?: XOR<GameStateCreateWithoutCurrentNodeInput, GameStateUncheckedCreateWithoutCurrentNodeInput> | GameStateCreateWithoutCurrentNodeInput[] | GameStateUncheckedCreateWithoutCurrentNodeInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutCurrentNodeInput | GameStateCreateOrConnectWithoutCurrentNodeInput[]
    createMany?: GameStateCreateManyCurrentNodeInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type GameStateUncheckedCreateNestedManyWithoutStartNodeInput = {
    create?: XOR<GameStateCreateWithoutStartNodeInput, GameStateUncheckedCreateWithoutStartNodeInput> | GameStateCreateWithoutStartNodeInput[] | GameStateUncheckedCreateWithoutStartNodeInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutStartNodeInput | GameStateCreateOrConnectWithoutStartNodeInput[]
    createMany?: GameStateCreateManyStartNodeInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type GameSettingUncheckedCreateNestedManyWithoutStartNodeInput = {
    create?: XOR<GameSettingCreateWithoutStartNodeInput, GameSettingUncheckedCreateWithoutStartNodeInput> | GameSettingCreateWithoutStartNodeInput[] | GameSettingUncheckedCreateWithoutStartNodeInput[]
    connectOrCreate?: GameSettingCreateOrConnectWithoutStartNodeInput | GameSettingCreateOrConnectWithoutStartNodeInput[]
    createMany?: GameSettingCreateManyStartNodeInputEnvelope
    connect?: GameSettingWhereUniqueInput | GameSettingWhereUniqueInput[]
  }

  export type ChoiceUpdateManyWithoutSourceNodeNestedInput = {
    create?: XOR<ChoiceCreateWithoutSourceNodeInput, ChoiceUncheckedCreateWithoutSourceNodeInput> | ChoiceCreateWithoutSourceNodeInput[] | ChoiceUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutSourceNodeInput | ChoiceCreateOrConnectWithoutSourceNodeInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutSourceNodeInput | ChoiceUpsertWithWhereUniqueWithoutSourceNodeInput[]
    createMany?: ChoiceCreateManySourceNodeInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutSourceNodeInput | ChoiceUpdateWithWhereUniqueWithoutSourceNodeInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutSourceNodeInput | ChoiceUpdateManyWithWhereWithoutSourceNodeInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type ChoiceUpdateManyWithoutNextNodeNestedInput = {
    create?: XOR<ChoiceCreateWithoutNextNodeInput, ChoiceUncheckedCreateWithoutNextNodeInput> | ChoiceCreateWithoutNextNodeInput[] | ChoiceUncheckedCreateWithoutNextNodeInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutNextNodeInput | ChoiceCreateOrConnectWithoutNextNodeInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutNextNodeInput | ChoiceUpsertWithWhereUniqueWithoutNextNodeInput[]
    createMany?: ChoiceCreateManyNextNodeInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutNextNodeInput | ChoiceUpdateWithWhereUniqueWithoutNextNodeInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutNextNodeInput | ChoiceUpdateManyWithWhereWithoutNextNodeInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type GameStateUpdateManyWithoutCurrentNodeNestedInput = {
    create?: XOR<GameStateCreateWithoutCurrentNodeInput, GameStateUncheckedCreateWithoutCurrentNodeInput> | GameStateCreateWithoutCurrentNodeInput[] | GameStateUncheckedCreateWithoutCurrentNodeInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutCurrentNodeInput | GameStateCreateOrConnectWithoutCurrentNodeInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutCurrentNodeInput | GameStateUpsertWithWhereUniqueWithoutCurrentNodeInput[]
    createMany?: GameStateCreateManyCurrentNodeInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutCurrentNodeInput | GameStateUpdateWithWhereUniqueWithoutCurrentNodeInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutCurrentNodeInput | GameStateUpdateManyWithWhereWithoutCurrentNodeInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type GameStateUpdateManyWithoutStartNodeNestedInput = {
    create?: XOR<GameStateCreateWithoutStartNodeInput, GameStateUncheckedCreateWithoutStartNodeInput> | GameStateCreateWithoutStartNodeInput[] | GameStateUncheckedCreateWithoutStartNodeInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutStartNodeInput | GameStateCreateOrConnectWithoutStartNodeInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutStartNodeInput | GameStateUpsertWithWhereUniqueWithoutStartNodeInput[]
    createMany?: GameStateCreateManyStartNodeInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutStartNodeInput | GameStateUpdateWithWhereUniqueWithoutStartNodeInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutStartNodeInput | GameStateUpdateManyWithWhereWithoutStartNodeInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type GameSettingUpdateManyWithoutStartNodeNestedInput = {
    create?: XOR<GameSettingCreateWithoutStartNodeInput, GameSettingUncheckedCreateWithoutStartNodeInput> | GameSettingCreateWithoutStartNodeInput[] | GameSettingUncheckedCreateWithoutStartNodeInput[]
    connectOrCreate?: GameSettingCreateOrConnectWithoutStartNodeInput | GameSettingCreateOrConnectWithoutStartNodeInput[]
    upsert?: GameSettingUpsertWithWhereUniqueWithoutStartNodeInput | GameSettingUpsertWithWhereUniqueWithoutStartNodeInput[]
    createMany?: GameSettingCreateManyStartNodeInputEnvelope
    set?: GameSettingWhereUniqueInput | GameSettingWhereUniqueInput[]
    disconnect?: GameSettingWhereUniqueInput | GameSettingWhereUniqueInput[]
    delete?: GameSettingWhereUniqueInput | GameSettingWhereUniqueInput[]
    connect?: GameSettingWhereUniqueInput | GameSettingWhereUniqueInput[]
    update?: GameSettingUpdateWithWhereUniqueWithoutStartNodeInput | GameSettingUpdateWithWhereUniqueWithoutStartNodeInput[]
    updateMany?: GameSettingUpdateManyWithWhereWithoutStartNodeInput | GameSettingUpdateManyWithWhereWithoutStartNodeInput[]
    deleteMany?: GameSettingScalarWhereInput | GameSettingScalarWhereInput[]
  }

  export type ChoiceUncheckedUpdateManyWithoutSourceNodeNestedInput = {
    create?: XOR<ChoiceCreateWithoutSourceNodeInput, ChoiceUncheckedCreateWithoutSourceNodeInput> | ChoiceCreateWithoutSourceNodeInput[] | ChoiceUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutSourceNodeInput | ChoiceCreateOrConnectWithoutSourceNodeInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutSourceNodeInput | ChoiceUpsertWithWhereUniqueWithoutSourceNodeInput[]
    createMany?: ChoiceCreateManySourceNodeInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutSourceNodeInput | ChoiceUpdateWithWhereUniqueWithoutSourceNodeInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutSourceNodeInput | ChoiceUpdateManyWithWhereWithoutSourceNodeInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type ChoiceUncheckedUpdateManyWithoutNextNodeNestedInput = {
    create?: XOR<ChoiceCreateWithoutNextNodeInput, ChoiceUncheckedCreateWithoutNextNodeInput> | ChoiceCreateWithoutNextNodeInput[] | ChoiceUncheckedCreateWithoutNextNodeInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutNextNodeInput | ChoiceCreateOrConnectWithoutNextNodeInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutNextNodeInput | ChoiceUpsertWithWhereUniqueWithoutNextNodeInput[]
    createMany?: ChoiceCreateManyNextNodeInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutNextNodeInput | ChoiceUpdateWithWhereUniqueWithoutNextNodeInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutNextNodeInput | ChoiceUpdateManyWithWhereWithoutNextNodeInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type GameStateUncheckedUpdateManyWithoutCurrentNodeNestedInput = {
    create?: XOR<GameStateCreateWithoutCurrentNodeInput, GameStateUncheckedCreateWithoutCurrentNodeInput> | GameStateCreateWithoutCurrentNodeInput[] | GameStateUncheckedCreateWithoutCurrentNodeInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutCurrentNodeInput | GameStateCreateOrConnectWithoutCurrentNodeInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutCurrentNodeInput | GameStateUpsertWithWhereUniqueWithoutCurrentNodeInput[]
    createMany?: GameStateCreateManyCurrentNodeInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutCurrentNodeInput | GameStateUpdateWithWhereUniqueWithoutCurrentNodeInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutCurrentNodeInput | GameStateUpdateManyWithWhereWithoutCurrentNodeInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type GameStateUncheckedUpdateManyWithoutStartNodeNestedInput = {
    create?: XOR<GameStateCreateWithoutStartNodeInput, GameStateUncheckedCreateWithoutStartNodeInput> | GameStateCreateWithoutStartNodeInput[] | GameStateUncheckedCreateWithoutStartNodeInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutStartNodeInput | GameStateCreateOrConnectWithoutStartNodeInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutStartNodeInput | GameStateUpsertWithWhereUniqueWithoutStartNodeInput[]
    createMany?: GameStateCreateManyStartNodeInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutStartNodeInput | GameStateUpdateWithWhereUniqueWithoutStartNodeInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutStartNodeInput | GameStateUpdateManyWithWhereWithoutStartNodeInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type GameSettingUncheckedUpdateManyWithoutStartNodeNestedInput = {
    create?: XOR<GameSettingCreateWithoutStartNodeInput, GameSettingUncheckedCreateWithoutStartNodeInput> | GameSettingCreateWithoutStartNodeInput[] | GameSettingUncheckedCreateWithoutStartNodeInput[]
    connectOrCreate?: GameSettingCreateOrConnectWithoutStartNodeInput | GameSettingCreateOrConnectWithoutStartNodeInput[]
    upsert?: GameSettingUpsertWithWhereUniqueWithoutStartNodeInput | GameSettingUpsertWithWhereUniqueWithoutStartNodeInput[]
    createMany?: GameSettingCreateManyStartNodeInputEnvelope
    set?: GameSettingWhereUniqueInput | GameSettingWhereUniqueInput[]
    disconnect?: GameSettingWhereUniqueInput | GameSettingWhereUniqueInput[]
    delete?: GameSettingWhereUniqueInput | GameSettingWhereUniqueInput[]
    connect?: GameSettingWhereUniqueInput | GameSettingWhereUniqueInput[]
    update?: GameSettingUpdateWithWhereUniqueWithoutStartNodeInput | GameSettingUpdateWithWhereUniqueWithoutStartNodeInput[]
    updateMany?: GameSettingUpdateManyWithWhereWithoutStartNodeInput | GameSettingUpdateManyWithWhereWithoutStartNodeInput[]
    deleteMany?: GameSettingScalarWhereInput | GameSettingScalarWhereInput[]
  }

  export type NarrativeNodeCreateNestedOneWithoutChoicesInput = {
    create?: XOR<NarrativeNodeCreateWithoutChoicesInput, NarrativeNodeUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: NarrativeNodeCreateOrConnectWithoutChoicesInput
    connect?: NarrativeNodeWhereUniqueInput
  }

  export type NarrativeNodeCreateNestedOneWithoutIncomingChoicesInput = {
    create?: XOR<NarrativeNodeCreateWithoutIncomingChoicesInput, NarrativeNodeUncheckedCreateWithoutIncomingChoicesInput>
    connectOrCreate?: NarrativeNodeCreateOrConnectWithoutIncomingChoicesInput
    connect?: NarrativeNodeWhereUniqueInput
  }

  export type NarrativeNodeUpdateOneRequiredWithoutChoicesNestedInput = {
    create?: XOR<NarrativeNodeCreateWithoutChoicesInput, NarrativeNodeUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: NarrativeNodeCreateOrConnectWithoutChoicesInput
    upsert?: NarrativeNodeUpsertWithoutChoicesInput
    connect?: NarrativeNodeWhereUniqueInput
    update?: XOR<XOR<NarrativeNodeUpdateToOneWithWhereWithoutChoicesInput, NarrativeNodeUpdateWithoutChoicesInput>, NarrativeNodeUncheckedUpdateWithoutChoicesInput>
  }

  export type NarrativeNodeUpdateOneRequiredWithoutIncomingChoicesNestedInput = {
    create?: XOR<NarrativeNodeCreateWithoutIncomingChoicesInput, NarrativeNodeUncheckedCreateWithoutIncomingChoicesInput>
    connectOrCreate?: NarrativeNodeCreateOrConnectWithoutIncomingChoicesInput
    upsert?: NarrativeNodeUpsertWithoutIncomingChoicesInput
    connect?: NarrativeNodeWhereUniqueInput
    update?: XOR<XOR<NarrativeNodeUpdateToOneWithWhereWithoutIncomingChoicesInput, NarrativeNodeUpdateWithoutIncomingChoicesInput>, NarrativeNodeUncheckedUpdateWithoutIncomingChoicesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GameStateCreateWithoutUserInput = {
    id?: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stateData?: NullableJsonNullValueInput | InputJsonValue
    currentNode?: NarrativeNodeCreateNestedOneWithoutGameStatesAsCurrentInput
    startNode?: NarrativeNodeCreateNestedOneWithoutGameStatesAsStartInput
  }

  export type GameStateUncheckedCreateWithoutUserInput = {
    id?: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    currentNodeId?: string | null
    startNodeId?: string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateCreateOrConnectWithoutUserInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutUserInput, GameStateUncheckedCreateWithoutUserInput>
  }

  export type GameStateCreateManyUserInputEnvelope = {
    data: GameStateCreateManyUserInput | GameStateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameStateUpsertWithWhereUniqueWithoutUserInput = {
    where: GameStateWhereUniqueInput
    update: XOR<GameStateUpdateWithoutUserInput, GameStateUncheckedUpdateWithoutUserInput>
    create: XOR<GameStateCreateWithoutUserInput, GameStateUncheckedCreateWithoutUserInput>
  }

  export type GameStateUpdateWithWhereUniqueWithoutUserInput = {
    where: GameStateWhereUniqueInput
    data: XOR<GameStateUpdateWithoutUserInput, GameStateUncheckedUpdateWithoutUserInput>
  }

  export type GameStateUpdateManyWithWhereWithoutUserInput = {
    where: GameStateScalarWhereInput
    data: XOR<GameStateUpdateManyMutationInput, GameStateUncheckedUpdateManyWithoutUserInput>
  }

  export type GameStateScalarWhereInput = {
    AND?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
    OR?: GameStateScalarWhereInput[]
    NOT?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
    id?: StringFilter<"GameState"> | string
    userId?: StringFilter<"GameState"> | string
    currentScore?: IntFilter<"GameState"> | number
    createdAt?: DateTimeFilter<"GameState"> | Date | string
    updatedAt?: DateTimeFilter<"GameState"> | Date | string
    currentNodeId?: StringNullableFilter<"GameState"> | string | null
    startNodeId?: StringNullableFilter<"GameState"> | string | null
    stateData?: JsonNullableFilter<"GameState">
  }

  export type UserCreateWithoutGameStatesInput = {
    id?: string
    email: string
    name?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutGameStatesInput = {
    id?: string
    email: string
    name?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutGameStatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameStatesInput, UserUncheckedCreateWithoutGameStatesInput>
  }

  export type NarrativeNodeCreateWithoutGameStatesAsCurrentInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    choices?: ChoiceCreateNestedManyWithoutSourceNodeInput
    incomingChoices?: ChoiceCreateNestedManyWithoutNextNodeInput
    gameStatesAsStart?: GameStateCreateNestedManyWithoutStartNodeInput
    gameSettingAsStart?: GameSettingCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeUncheckedCreateWithoutGameStatesAsCurrentInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    choices?: ChoiceUncheckedCreateNestedManyWithoutSourceNodeInput
    incomingChoices?: ChoiceUncheckedCreateNestedManyWithoutNextNodeInput
    gameStatesAsStart?: GameStateUncheckedCreateNestedManyWithoutStartNodeInput
    gameSettingAsStart?: GameSettingUncheckedCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeCreateOrConnectWithoutGameStatesAsCurrentInput = {
    where: NarrativeNodeWhereUniqueInput
    create: XOR<NarrativeNodeCreateWithoutGameStatesAsCurrentInput, NarrativeNodeUncheckedCreateWithoutGameStatesAsCurrentInput>
  }

  export type NarrativeNodeCreateWithoutGameStatesAsStartInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    choices?: ChoiceCreateNestedManyWithoutSourceNodeInput
    incomingChoices?: ChoiceCreateNestedManyWithoutNextNodeInput
    gameStatesAsCurrent?: GameStateCreateNestedManyWithoutCurrentNodeInput
    gameSettingAsStart?: GameSettingCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeUncheckedCreateWithoutGameStatesAsStartInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    choices?: ChoiceUncheckedCreateNestedManyWithoutSourceNodeInput
    incomingChoices?: ChoiceUncheckedCreateNestedManyWithoutNextNodeInput
    gameStatesAsCurrent?: GameStateUncheckedCreateNestedManyWithoutCurrentNodeInput
    gameSettingAsStart?: GameSettingUncheckedCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeCreateOrConnectWithoutGameStatesAsStartInput = {
    where: NarrativeNodeWhereUniqueInput
    create: XOR<NarrativeNodeCreateWithoutGameStatesAsStartInput, NarrativeNodeUncheckedCreateWithoutGameStatesAsStartInput>
  }

  export type UserUpsertWithoutGameStatesInput = {
    update: XOR<UserUpdateWithoutGameStatesInput, UserUncheckedUpdateWithoutGameStatesInput>
    create: XOR<UserCreateWithoutGameStatesInput, UserUncheckedCreateWithoutGameStatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameStatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameStatesInput, UserUncheckedUpdateWithoutGameStatesInput>
  }

  export type UserUpdateWithoutGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrativeNodeUpsertWithoutGameStatesAsCurrentInput = {
    update: XOR<NarrativeNodeUpdateWithoutGameStatesAsCurrentInput, NarrativeNodeUncheckedUpdateWithoutGameStatesAsCurrentInput>
    create: XOR<NarrativeNodeCreateWithoutGameStatesAsCurrentInput, NarrativeNodeUncheckedCreateWithoutGameStatesAsCurrentInput>
    where?: NarrativeNodeWhereInput
  }

  export type NarrativeNodeUpdateToOneWithWhereWithoutGameStatesAsCurrentInput = {
    where?: NarrativeNodeWhereInput
    data: XOR<NarrativeNodeUpdateWithoutGameStatesAsCurrentInput, NarrativeNodeUncheckedUpdateWithoutGameStatesAsCurrentInput>
  }

  export type NarrativeNodeUpdateWithoutGameStatesAsCurrentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    choices?: ChoiceUpdateManyWithoutSourceNodeNestedInput
    incomingChoices?: ChoiceUpdateManyWithoutNextNodeNestedInput
    gameStatesAsStart?: GameStateUpdateManyWithoutStartNodeNestedInput
    gameSettingAsStart?: GameSettingUpdateManyWithoutStartNodeNestedInput
  }

  export type NarrativeNodeUncheckedUpdateWithoutGameStatesAsCurrentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    choices?: ChoiceUncheckedUpdateManyWithoutSourceNodeNestedInput
    incomingChoices?: ChoiceUncheckedUpdateManyWithoutNextNodeNestedInput
    gameStatesAsStart?: GameStateUncheckedUpdateManyWithoutStartNodeNestedInput
    gameSettingAsStart?: GameSettingUncheckedUpdateManyWithoutStartNodeNestedInput
  }

  export type NarrativeNodeUpsertWithoutGameStatesAsStartInput = {
    update: XOR<NarrativeNodeUpdateWithoutGameStatesAsStartInput, NarrativeNodeUncheckedUpdateWithoutGameStatesAsStartInput>
    create: XOR<NarrativeNodeCreateWithoutGameStatesAsStartInput, NarrativeNodeUncheckedCreateWithoutGameStatesAsStartInput>
    where?: NarrativeNodeWhereInput
  }

  export type NarrativeNodeUpdateToOneWithWhereWithoutGameStatesAsStartInput = {
    where?: NarrativeNodeWhereInput
    data: XOR<NarrativeNodeUpdateWithoutGameStatesAsStartInput, NarrativeNodeUncheckedUpdateWithoutGameStatesAsStartInput>
  }

  export type NarrativeNodeUpdateWithoutGameStatesAsStartInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    choices?: ChoiceUpdateManyWithoutSourceNodeNestedInput
    incomingChoices?: ChoiceUpdateManyWithoutNextNodeNestedInput
    gameStatesAsCurrent?: GameStateUpdateManyWithoutCurrentNodeNestedInput
    gameSettingAsStart?: GameSettingUpdateManyWithoutStartNodeNestedInput
  }

  export type NarrativeNodeUncheckedUpdateWithoutGameStatesAsStartInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    choices?: ChoiceUncheckedUpdateManyWithoutSourceNodeNestedInput
    incomingChoices?: ChoiceUncheckedUpdateManyWithoutNextNodeNestedInput
    gameStatesAsCurrent?: GameStateUncheckedUpdateManyWithoutCurrentNodeNestedInput
    gameSettingAsStart?: GameSettingUncheckedUpdateManyWithoutStartNodeNestedInput
  }

  export type NarrativeNodeCreateWithoutGameSettingAsStartInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    choices?: ChoiceCreateNestedManyWithoutSourceNodeInput
    incomingChoices?: ChoiceCreateNestedManyWithoutNextNodeInput
    gameStatesAsCurrent?: GameStateCreateNestedManyWithoutCurrentNodeInput
    gameStatesAsStart?: GameStateCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeUncheckedCreateWithoutGameSettingAsStartInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    choices?: ChoiceUncheckedCreateNestedManyWithoutSourceNodeInput
    incomingChoices?: ChoiceUncheckedCreateNestedManyWithoutNextNodeInput
    gameStatesAsCurrent?: GameStateUncheckedCreateNestedManyWithoutCurrentNodeInput
    gameStatesAsStart?: GameStateUncheckedCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeCreateOrConnectWithoutGameSettingAsStartInput = {
    where: NarrativeNodeWhereUniqueInput
    create: XOR<NarrativeNodeCreateWithoutGameSettingAsStartInput, NarrativeNodeUncheckedCreateWithoutGameSettingAsStartInput>
  }

  export type NarrativeNodeUpsertWithoutGameSettingAsStartInput = {
    update: XOR<NarrativeNodeUpdateWithoutGameSettingAsStartInput, NarrativeNodeUncheckedUpdateWithoutGameSettingAsStartInput>
    create: XOR<NarrativeNodeCreateWithoutGameSettingAsStartInput, NarrativeNodeUncheckedCreateWithoutGameSettingAsStartInput>
    where?: NarrativeNodeWhereInput
  }

  export type NarrativeNodeUpdateToOneWithWhereWithoutGameSettingAsStartInput = {
    where?: NarrativeNodeWhereInput
    data: XOR<NarrativeNodeUpdateWithoutGameSettingAsStartInput, NarrativeNodeUncheckedUpdateWithoutGameSettingAsStartInput>
  }

  export type NarrativeNodeUpdateWithoutGameSettingAsStartInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    choices?: ChoiceUpdateManyWithoutSourceNodeNestedInput
    incomingChoices?: ChoiceUpdateManyWithoutNextNodeNestedInput
    gameStatesAsCurrent?: GameStateUpdateManyWithoutCurrentNodeNestedInput
    gameStatesAsStart?: GameStateUpdateManyWithoutStartNodeNestedInput
  }

  export type NarrativeNodeUncheckedUpdateWithoutGameSettingAsStartInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    choices?: ChoiceUncheckedUpdateManyWithoutSourceNodeNestedInput
    incomingChoices?: ChoiceUncheckedUpdateManyWithoutNextNodeNestedInput
    gameStatesAsCurrent?: GameStateUncheckedUpdateManyWithoutCurrentNodeNestedInput
    gameStatesAsStart?: GameStateUncheckedUpdateManyWithoutStartNodeNestedInput
  }

  export type ChoiceCreateWithoutSourceNodeInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nextNode: NarrativeNodeCreateNestedOneWithoutIncomingChoicesInput
  }

  export type ChoiceUncheckedCreateWithoutSourceNodeInput = {
    id?: string
    text: string
    nextNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceCreateOrConnectWithoutSourceNodeInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutSourceNodeInput, ChoiceUncheckedCreateWithoutSourceNodeInput>
  }

  export type ChoiceCreateManySourceNodeInputEnvelope = {
    data: ChoiceCreateManySourceNodeInput | ChoiceCreateManySourceNodeInput[]
    skipDuplicates?: boolean
  }

  export type ChoiceCreateWithoutNextNodeInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceNode: NarrativeNodeCreateNestedOneWithoutChoicesInput
  }

  export type ChoiceUncheckedCreateWithoutNextNodeInput = {
    id?: string
    text: string
    sourceNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceCreateOrConnectWithoutNextNodeInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutNextNodeInput, ChoiceUncheckedCreateWithoutNextNodeInput>
  }

  export type ChoiceCreateManyNextNodeInputEnvelope = {
    data: ChoiceCreateManyNextNodeInput | ChoiceCreateManyNextNodeInput[]
    skipDuplicates?: boolean
  }

  export type GameStateCreateWithoutCurrentNodeInput = {
    id?: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stateData?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutGameStatesInput
    startNode?: NarrativeNodeCreateNestedOneWithoutGameStatesAsStartInput
  }

  export type GameStateUncheckedCreateWithoutCurrentNodeInput = {
    id?: string
    userId: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startNodeId?: string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateCreateOrConnectWithoutCurrentNodeInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutCurrentNodeInput, GameStateUncheckedCreateWithoutCurrentNodeInput>
  }

  export type GameStateCreateManyCurrentNodeInputEnvelope = {
    data: GameStateCreateManyCurrentNodeInput | GameStateCreateManyCurrentNodeInput[]
    skipDuplicates?: boolean
  }

  export type GameStateCreateWithoutStartNodeInput = {
    id?: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stateData?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutGameStatesInput
    currentNode?: NarrativeNodeCreateNestedOneWithoutGameStatesAsCurrentInput
  }

  export type GameStateUncheckedCreateWithoutStartNodeInput = {
    id?: string
    userId: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    currentNodeId?: string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateCreateOrConnectWithoutStartNodeInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutStartNodeInput, GameStateUncheckedCreateWithoutStartNodeInput>
  }

  export type GameStateCreateManyStartNodeInputEnvelope = {
    data: GameStateCreateManyStartNodeInput | GameStateCreateManyStartNodeInput[]
    skipDuplicates?: boolean
  }

  export type GameSettingCreateWithoutStartNodeInput = {
    id?: string
    settingName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameSettingUncheckedCreateWithoutStartNodeInput = {
    id?: string
    settingName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameSettingCreateOrConnectWithoutStartNodeInput = {
    where: GameSettingWhereUniqueInput
    create: XOR<GameSettingCreateWithoutStartNodeInput, GameSettingUncheckedCreateWithoutStartNodeInput>
  }

  export type GameSettingCreateManyStartNodeInputEnvelope = {
    data: GameSettingCreateManyStartNodeInput | GameSettingCreateManyStartNodeInput[]
    skipDuplicates?: boolean
  }

  export type ChoiceUpsertWithWhereUniqueWithoutSourceNodeInput = {
    where: ChoiceWhereUniqueInput
    update: XOR<ChoiceUpdateWithoutSourceNodeInput, ChoiceUncheckedUpdateWithoutSourceNodeInput>
    create: XOR<ChoiceCreateWithoutSourceNodeInput, ChoiceUncheckedCreateWithoutSourceNodeInput>
  }

  export type ChoiceUpdateWithWhereUniqueWithoutSourceNodeInput = {
    where: ChoiceWhereUniqueInput
    data: XOR<ChoiceUpdateWithoutSourceNodeInput, ChoiceUncheckedUpdateWithoutSourceNodeInput>
  }

  export type ChoiceUpdateManyWithWhereWithoutSourceNodeInput = {
    where: ChoiceScalarWhereInput
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyWithoutSourceNodeInput>
  }

  export type ChoiceScalarWhereInput = {
    AND?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
    OR?: ChoiceScalarWhereInput[]
    NOT?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
    id?: StringFilter<"Choice"> | string
    text?: StringFilter<"Choice"> | string
    sourceNodeId?: StringFilter<"Choice"> | string
    nextNodeId?: StringFilter<"Choice"> | string
    createdAt?: DateTimeFilter<"Choice"> | Date | string
    updatedAt?: DateTimeFilter<"Choice"> | Date | string
  }

  export type ChoiceUpsertWithWhereUniqueWithoutNextNodeInput = {
    where: ChoiceWhereUniqueInput
    update: XOR<ChoiceUpdateWithoutNextNodeInput, ChoiceUncheckedUpdateWithoutNextNodeInput>
    create: XOR<ChoiceCreateWithoutNextNodeInput, ChoiceUncheckedCreateWithoutNextNodeInput>
  }

  export type ChoiceUpdateWithWhereUniqueWithoutNextNodeInput = {
    where: ChoiceWhereUniqueInput
    data: XOR<ChoiceUpdateWithoutNextNodeInput, ChoiceUncheckedUpdateWithoutNextNodeInput>
  }

  export type ChoiceUpdateManyWithWhereWithoutNextNodeInput = {
    where: ChoiceScalarWhereInput
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyWithoutNextNodeInput>
  }

  export type GameStateUpsertWithWhereUniqueWithoutCurrentNodeInput = {
    where: GameStateWhereUniqueInput
    update: XOR<GameStateUpdateWithoutCurrentNodeInput, GameStateUncheckedUpdateWithoutCurrentNodeInput>
    create: XOR<GameStateCreateWithoutCurrentNodeInput, GameStateUncheckedCreateWithoutCurrentNodeInput>
  }

  export type GameStateUpdateWithWhereUniqueWithoutCurrentNodeInput = {
    where: GameStateWhereUniqueInput
    data: XOR<GameStateUpdateWithoutCurrentNodeInput, GameStateUncheckedUpdateWithoutCurrentNodeInput>
  }

  export type GameStateUpdateManyWithWhereWithoutCurrentNodeInput = {
    where: GameStateScalarWhereInput
    data: XOR<GameStateUpdateManyMutationInput, GameStateUncheckedUpdateManyWithoutCurrentNodeInput>
  }

  export type GameStateUpsertWithWhereUniqueWithoutStartNodeInput = {
    where: GameStateWhereUniqueInput
    update: XOR<GameStateUpdateWithoutStartNodeInput, GameStateUncheckedUpdateWithoutStartNodeInput>
    create: XOR<GameStateCreateWithoutStartNodeInput, GameStateUncheckedCreateWithoutStartNodeInput>
  }

  export type GameStateUpdateWithWhereUniqueWithoutStartNodeInput = {
    where: GameStateWhereUniqueInput
    data: XOR<GameStateUpdateWithoutStartNodeInput, GameStateUncheckedUpdateWithoutStartNodeInput>
  }

  export type GameStateUpdateManyWithWhereWithoutStartNodeInput = {
    where: GameStateScalarWhereInput
    data: XOR<GameStateUpdateManyMutationInput, GameStateUncheckedUpdateManyWithoutStartNodeInput>
  }

  export type GameSettingUpsertWithWhereUniqueWithoutStartNodeInput = {
    where: GameSettingWhereUniqueInput
    update: XOR<GameSettingUpdateWithoutStartNodeInput, GameSettingUncheckedUpdateWithoutStartNodeInput>
    create: XOR<GameSettingCreateWithoutStartNodeInput, GameSettingUncheckedCreateWithoutStartNodeInput>
  }

  export type GameSettingUpdateWithWhereUniqueWithoutStartNodeInput = {
    where: GameSettingWhereUniqueInput
    data: XOR<GameSettingUpdateWithoutStartNodeInput, GameSettingUncheckedUpdateWithoutStartNodeInput>
  }

  export type GameSettingUpdateManyWithWhereWithoutStartNodeInput = {
    where: GameSettingScalarWhereInput
    data: XOR<GameSettingUpdateManyMutationInput, GameSettingUncheckedUpdateManyWithoutStartNodeInput>
  }

  export type GameSettingScalarWhereInput = {
    AND?: GameSettingScalarWhereInput | GameSettingScalarWhereInput[]
    OR?: GameSettingScalarWhereInput[]
    NOT?: GameSettingScalarWhereInput | GameSettingScalarWhereInput[]
    id?: StringFilter<"GameSetting"> | string
    settingName?: StringFilter<"GameSetting"> | string
    startNodeId?: StringNullableFilter<"GameSetting"> | string | null
    createdAt?: DateTimeFilter<"GameSetting"> | Date | string
    updatedAt?: DateTimeFilter<"GameSetting"> | Date | string
  }

  export type NarrativeNodeCreateWithoutChoicesInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    incomingChoices?: ChoiceCreateNestedManyWithoutNextNodeInput
    gameStatesAsCurrent?: GameStateCreateNestedManyWithoutCurrentNodeInput
    gameStatesAsStart?: GameStateCreateNestedManyWithoutStartNodeInput
    gameSettingAsStart?: GameSettingCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeUncheckedCreateWithoutChoicesInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    incomingChoices?: ChoiceUncheckedCreateNestedManyWithoutNextNodeInput
    gameStatesAsCurrent?: GameStateUncheckedCreateNestedManyWithoutCurrentNodeInput
    gameStatesAsStart?: GameStateUncheckedCreateNestedManyWithoutStartNodeInput
    gameSettingAsStart?: GameSettingUncheckedCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeCreateOrConnectWithoutChoicesInput = {
    where: NarrativeNodeWhereUniqueInput
    create: XOR<NarrativeNodeCreateWithoutChoicesInput, NarrativeNodeUncheckedCreateWithoutChoicesInput>
  }

  export type NarrativeNodeCreateWithoutIncomingChoicesInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    choices?: ChoiceCreateNestedManyWithoutSourceNodeInput
    gameStatesAsCurrent?: GameStateCreateNestedManyWithoutCurrentNodeInput
    gameStatesAsStart?: GameStateCreateNestedManyWithoutStartNodeInput
    gameSettingAsStart?: GameSettingCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeUncheckedCreateWithoutIncomingChoicesInput = {
    id?: string
    title: string
    text: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeType?: string | null
    challengeIdInternal?: string | null
    onSuccessNodeId?: string | null
    onFailureNodeId?: string | null
    choices?: ChoiceUncheckedCreateNestedManyWithoutSourceNodeInput
    gameStatesAsCurrent?: GameStateUncheckedCreateNestedManyWithoutCurrentNodeInput
    gameStatesAsStart?: GameStateUncheckedCreateNestedManyWithoutStartNodeInput
    gameSettingAsStart?: GameSettingUncheckedCreateNestedManyWithoutStartNodeInput
  }

  export type NarrativeNodeCreateOrConnectWithoutIncomingChoicesInput = {
    where: NarrativeNodeWhereUniqueInput
    create: XOR<NarrativeNodeCreateWithoutIncomingChoicesInput, NarrativeNodeUncheckedCreateWithoutIncomingChoicesInput>
  }

  export type NarrativeNodeUpsertWithoutChoicesInput = {
    update: XOR<NarrativeNodeUpdateWithoutChoicesInput, NarrativeNodeUncheckedUpdateWithoutChoicesInput>
    create: XOR<NarrativeNodeCreateWithoutChoicesInput, NarrativeNodeUncheckedCreateWithoutChoicesInput>
    where?: NarrativeNodeWhereInput
  }

  export type NarrativeNodeUpdateToOneWithWhereWithoutChoicesInput = {
    where?: NarrativeNodeWhereInput
    data: XOR<NarrativeNodeUpdateWithoutChoicesInput, NarrativeNodeUncheckedUpdateWithoutChoicesInput>
  }

  export type NarrativeNodeUpdateWithoutChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    incomingChoices?: ChoiceUpdateManyWithoutNextNodeNestedInput
    gameStatesAsCurrent?: GameStateUpdateManyWithoutCurrentNodeNestedInput
    gameStatesAsStart?: GameStateUpdateManyWithoutStartNodeNestedInput
    gameSettingAsStart?: GameSettingUpdateManyWithoutStartNodeNestedInput
  }

  export type NarrativeNodeUncheckedUpdateWithoutChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    incomingChoices?: ChoiceUncheckedUpdateManyWithoutNextNodeNestedInput
    gameStatesAsCurrent?: GameStateUncheckedUpdateManyWithoutCurrentNodeNestedInput
    gameStatesAsStart?: GameStateUncheckedUpdateManyWithoutStartNodeNestedInput
    gameSettingAsStart?: GameSettingUncheckedUpdateManyWithoutStartNodeNestedInput
  }

  export type NarrativeNodeUpsertWithoutIncomingChoicesInput = {
    update: XOR<NarrativeNodeUpdateWithoutIncomingChoicesInput, NarrativeNodeUncheckedUpdateWithoutIncomingChoicesInput>
    create: XOR<NarrativeNodeCreateWithoutIncomingChoicesInput, NarrativeNodeUncheckedCreateWithoutIncomingChoicesInput>
    where?: NarrativeNodeWhereInput
  }

  export type NarrativeNodeUpdateToOneWithWhereWithoutIncomingChoicesInput = {
    where?: NarrativeNodeWhereInput
    data: XOR<NarrativeNodeUpdateWithoutIncomingChoicesInput, NarrativeNodeUncheckedUpdateWithoutIncomingChoicesInput>
  }

  export type NarrativeNodeUpdateWithoutIncomingChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    choices?: ChoiceUpdateManyWithoutSourceNodeNestedInput
    gameStatesAsCurrent?: GameStateUpdateManyWithoutCurrentNodeNestedInput
    gameStatesAsStart?: GameStateUpdateManyWithoutStartNodeNestedInput
    gameSettingAsStart?: GameSettingUpdateManyWithoutStartNodeNestedInput
  }

  export type NarrativeNodeUncheckedUpdateWithoutIncomingChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeType?: NullableStringFieldUpdateOperationsInput | string | null
    challengeIdInternal?: NullableStringFieldUpdateOperationsInput | string | null
    onSuccessNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    onFailureNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    choices?: ChoiceUncheckedUpdateManyWithoutSourceNodeNestedInput
    gameStatesAsCurrent?: GameStateUncheckedUpdateManyWithoutCurrentNodeNestedInput
    gameStatesAsStart?: GameStateUncheckedUpdateManyWithoutStartNodeNestedInput
    gameSettingAsStart?: GameSettingUncheckedUpdateManyWithoutStartNodeNestedInput
  }

  export type GameStateCreateManyUserInput = {
    id?: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    currentNodeId?: string | null
    startNodeId?: string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stateData?: NullableJsonNullValueInput | InputJsonValue
    currentNode?: NarrativeNodeUpdateOneWithoutGameStatesAsCurrentNestedInput
    startNode?: NarrativeNodeUpdateOneWithoutGameStatesAsStartNestedInput
  }

  export type GameStateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChoiceCreateManySourceNodeInput = {
    id?: string
    text: string
    nextNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceCreateManyNextNodeInput = {
    id?: string
    text: string
    sourceNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameStateCreateManyCurrentNodeInput = {
    id?: string
    userId: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startNodeId?: string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateCreateManyStartNodeInput = {
    id?: string
    userId: string
    currentScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    currentNodeId?: string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameSettingCreateManyStartNodeInput = {
    id?: string
    settingName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUpdateWithoutSourceNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextNode?: NarrativeNodeUpdateOneRequiredWithoutIncomingChoicesNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutSourceNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    nextNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyWithoutSourceNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    nextNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUpdateWithoutNextNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceNode?: NarrativeNodeUpdateOneRequiredWithoutChoicesNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutNextNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyWithoutNextNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameStateUpdateWithoutCurrentNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stateData?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutGameStatesNestedInput
    startNode?: NarrativeNodeUpdateOneWithoutGameStatesAsStartNestedInput
  }

  export type GameStateUncheckedUpdateWithoutCurrentNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateUncheckedUpdateManyWithoutCurrentNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateUpdateWithoutStartNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stateData?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutGameStatesNestedInput
    currentNode?: NarrativeNodeUpdateOneWithoutGameStatesAsCurrentNestedInput
  }

  export type GameStateUncheckedUpdateWithoutStartNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameStateUncheckedUpdateManyWithoutStartNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    stateData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GameSettingUpdateWithoutStartNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSettingUncheckedUpdateWithoutStartNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSettingUncheckedUpdateManyWithoutStartNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}