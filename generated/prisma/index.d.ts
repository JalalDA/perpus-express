
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
 * Model Mahasiswa
 * 
 */
export type Mahasiswa = $Result.DefaultSelection<Prisma.$MahasiswaPayload>
/**
 * Model Buku
 * 
 */
export type Buku = $Result.DefaultSelection<Prisma.$BukuPayload>
/**
 * Model Rak
 * 
 */
export type Rak = $Result.DefaultSelection<Prisma.$RakPayload>
/**
 * Model Peminjaman
 * 
 */
export type Peminjaman = $Result.DefaultSelection<Prisma.$PeminjamanPayload>
/**
 * Model DetailPeminjaman
 * 
 */
export type DetailPeminjaman = $Result.DefaultSelection<Prisma.$DetailPeminjamanPayload>
/**
 * Model HistoryPeminjaman
 * 
 */
export type HistoryPeminjaman = $Result.DefaultSelection<Prisma.$HistoryPeminjamanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mahasiswas
 * const mahasiswas = await prisma.mahasiswa.findMany()
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
   * // Fetch zero or more Mahasiswas
   * const mahasiswas = await prisma.mahasiswa.findMany()
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
   * `prisma.mahasiswa`: Exposes CRUD operations for the **Mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.MahasiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buku`: Exposes CRUD operations for the **Buku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bukus
    * const bukus = await prisma.buku.findMany()
    * ```
    */
  get buku(): Prisma.BukuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rak`: Exposes CRUD operations for the **Rak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raks
    * const raks = await prisma.rak.findMany()
    * ```
    */
  get rak(): Prisma.RakDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peminjaman`: Exposes CRUD operations for the **Peminjaman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peminjamen
    * const peminjamen = await prisma.peminjaman.findMany()
    * ```
    */
  get peminjaman(): Prisma.PeminjamanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailPeminjaman`: Exposes CRUD operations for the **DetailPeminjaman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailPeminjamen
    * const detailPeminjamen = await prisma.detailPeminjaman.findMany()
    * ```
    */
  get detailPeminjaman(): Prisma.DetailPeminjamanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historyPeminjaman`: Exposes CRUD operations for the **HistoryPeminjaman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoryPeminjamen
    * const historyPeminjamen = await prisma.historyPeminjaman.findMany()
    * ```
    */
  get historyPeminjaman(): Prisma.HistoryPeminjamanDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Mahasiswa: 'Mahasiswa',
    Buku: 'Buku',
    Rak: 'Rak',
    Peminjaman: 'Peminjaman',
    DetailPeminjaman: 'DetailPeminjaman',
    HistoryPeminjaman: 'HistoryPeminjaman'
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
      modelProps: "mahasiswa" | "buku" | "rak" | "peminjaman" | "detailPeminjaman" | "historyPeminjaman"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Mahasiswa: {
        payload: Prisma.$MahasiswaPayload<ExtArgs>
        fields: Prisma.MahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MahasiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MahasiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findFirst: {
            args: Prisma.MahasiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MahasiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findMany: {
            args: Prisma.MahasiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          create: {
            args: Prisma.MahasiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          createMany: {
            args: Prisma.MahasiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MahasiswaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          delete: {
            args: Prisma.MahasiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          update: {
            args: Prisma.MahasiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.MahasiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MahasiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MahasiswaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          upsert: {
            args: Prisma.MahasiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.MahasiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MahasiswaCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
          }
        }
      }
      Buku: {
        payload: Prisma.$BukuPayload<ExtArgs>
        fields: Prisma.BukuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BukuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BukuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          findFirst: {
            args: Prisma.BukuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BukuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          findMany: {
            args: Prisma.BukuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>[]
          }
          create: {
            args: Prisma.BukuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          createMany: {
            args: Prisma.BukuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BukuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>[]
          }
          delete: {
            args: Prisma.BukuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          update: {
            args: Prisma.BukuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          deleteMany: {
            args: Prisma.BukuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BukuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BukuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>[]
          }
          upsert: {
            args: Prisma.BukuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          aggregate: {
            args: Prisma.BukuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuku>
          }
          groupBy: {
            args: Prisma.BukuGroupByArgs<ExtArgs>
            result: $Utils.Optional<BukuGroupByOutputType>[]
          }
          count: {
            args: Prisma.BukuCountArgs<ExtArgs>
            result: $Utils.Optional<BukuCountAggregateOutputType> | number
          }
        }
      }
      Rak: {
        payload: Prisma.$RakPayload<ExtArgs>
        fields: Prisma.RakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RakPayload>
          }
          findFirst: {
            args: Prisma.RakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RakPayload>
          }
          findMany: {
            args: Prisma.RakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RakPayload>[]
          }
          create: {
            args: Prisma.RakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RakPayload>
          }
          createMany: {
            args: Prisma.RakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RakPayload>[]
          }
          delete: {
            args: Prisma.RakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RakPayload>
          }
          update: {
            args: Prisma.RakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RakPayload>
          }
          deleteMany: {
            args: Prisma.RakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RakUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RakPayload>[]
          }
          upsert: {
            args: Prisma.RakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RakPayload>
          }
          aggregate: {
            args: Prisma.RakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRak>
          }
          groupBy: {
            args: Prisma.RakGroupByArgs<ExtArgs>
            result: $Utils.Optional<RakGroupByOutputType>[]
          }
          count: {
            args: Prisma.RakCountArgs<ExtArgs>
            result: $Utils.Optional<RakCountAggregateOutputType> | number
          }
        }
      }
      Peminjaman: {
        payload: Prisma.$PeminjamanPayload<ExtArgs>
        fields: Prisma.PeminjamanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeminjamanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeminjamanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          findFirst: {
            args: Prisma.PeminjamanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeminjamanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          findMany: {
            args: Prisma.PeminjamanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>[]
          }
          create: {
            args: Prisma.PeminjamanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          createMany: {
            args: Prisma.PeminjamanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeminjamanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>[]
          }
          delete: {
            args: Prisma.PeminjamanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          update: {
            args: Prisma.PeminjamanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          deleteMany: {
            args: Prisma.PeminjamanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeminjamanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeminjamanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>[]
          }
          upsert: {
            args: Prisma.PeminjamanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          aggregate: {
            args: Prisma.PeminjamanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeminjaman>
          }
          groupBy: {
            args: Prisma.PeminjamanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeminjamanCountArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanCountAggregateOutputType> | number
          }
        }
      }
      DetailPeminjaman: {
        payload: Prisma.$DetailPeminjamanPayload<ExtArgs>
        fields: Prisma.DetailPeminjamanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailPeminjamanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPeminjamanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailPeminjamanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPeminjamanPayload>
          }
          findFirst: {
            args: Prisma.DetailPeminjamanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPeminjamanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailPeminjamanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPeminjamanPayload>
          }
          findMany: {
            args: Prisma.DetailPeminjamanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPeminjamanPayload>[]
          }
          create: {
            args: Prisma.DetailPeminjamanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPeminjamanPayload>
          }
          createMany: {
            args: Prisma.DetailPeminjamanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailPeminjamanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPeminjamanPayload>[]
          }
          delete: {
            args: Prisma.DetailPeminjamanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPeminjamanPayload>
          }
          update: {
            args: Prisma.DetailPeminjamanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPeminjamanPayload>
          }
          deleteMany: {
            args: Prisma.DetailPeminjamanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailPeminjamanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetailPeminjamanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPeminjamanPayload>[]
          }
          upsert: {
            args: Prisma.DetailPeminjamanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPeminjamanPayload>
          }
          aggregate: {
            args: Prisma.DetailPeminjamanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailPeminjaman>
          }
          groupBy: {
            args: Prisma.DetailPeminjamanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailPeminjamanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailPeminjamanCountArgs<ExtArgs>
            result: $Utils.Optional<DetailPeminjamanCountAggregateOutputType> | number
          }
        }
      }
      HistoryPeminjaman: {
        payload: Prisma.$HistoryPeminjamanPayload<ExtArgs>
        fields: Prisma.HistoryPeminjamanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryPeminjamanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPeminjamanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryPeminjamanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPeminjamanPayload>
          }
          findFirst: {
            args: Prisma.HistoryPeminjamanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPeminjamanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryPeminjamanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPeminjamanPayload>
          }
          findMany: {
            args: Prisma.HistoryPeminjamanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPeminjamanPayload>[]
          }
          create: {
            args: Prisma.HistoryPeminjamanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPeminjamanPayload>
          }
          createMany: {
            args: Prisma.HistoryPeminjamanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryPeminjamanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPeminjamanPayload>[]
          }
          delete: {
            args: Prisma.HistoryPeminjamanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPeminjamanPayload>
          }
          update: {
            args: Prisma.HistoryPeminjamanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPeminjamanPayload>
          }
          deleteMany: {
            args: Prisma.HistoryPeminjamanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryPeminjamanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoryPeminjamanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPeminjamanPayload>[]
          }
          upsert: {
            args: Prisma.HistoryPeminjamanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPeminjamanPayload>
          }
          aggregate: {
            args: Prisma.HistoryPeminjamanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoryPeminjaman>
          }
          groupBy: {
            args: Prisma.HistoryPeminjamanGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryPeminjamanGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryPeminjamanCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryPeminjamanCountAggregateOutputType> | number
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
    mahasiswa?: MahasiswaOmit
    buku?: BukuOmit
    rak?: RakOmit
    peminjaman?: PeminjamanOmit
    detailPeminjaman?: DetailPeminjamanOmit
    historyPeminjaman?: HistoryPeminjamanOmit
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
   * Count Type MahasiswaCountOutputType
   */

  export type MahasiswaCountOutputType = {
    peminjamans: number
  }

  export type MahasiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjamans?: boolean | MahasiswaCountOutputTypeCountPeminjamansArgs
  }

  // Custom InputTypes
  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaCountOutputType
     */
    select?: MahasiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountPeminjamansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanWhereInput
  }


  /**
   * Count Type BukuCountOutputType
   */

  export type BukuCountOutputType = {
    details: number
  }

  export type BukuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | BukuCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * BukuCountOutputType without action
   */
  export type BukuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuCountOutputType
     */
    select?: BukuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BukuCountOutputType without action
   */
  export type BukuCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPeminjamanWhereInput
  }


  /**
   * Count Type RakCountOutputType
   */

  export type RakCountOutputType = {
    bukuList: number
  }

  export type RakCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bukuList?: boolean | RakCountOutputTypeCountBukuListArgs
  }

  // Custom InputTypes
  /**
   * RakCountOutputType without action
   */
  export type RakCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RakCountOutputType
     */
    select?: RakCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RakCountOutputType without action
   */
  export type RakCountOutputTypeCountBukuListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BukuWhereInput
  }


  /**
   * Count Type PeminjamanCountOutputType
   */

  export type PeminjamanCountOutputType = {
    details: number
    histories: number
  }

  export type PeminjamanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | PeminjamanCountOutputTypeCountDetailsArgs
    histories?: boolean | PeminjamanCountOutputTypeCountHistoriesArgs
  }

  // Custom InputTypes
  /**
   * PeminjamanCountOutputType without action
   */
  export type PeminjamanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanCountOutputType
     */
    select?: PeminjamanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeminjamanCountOutputType without action
   */
  export type PeminjamanCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPeminjamanWhereInput
  }

  /**
   * PeminjamanCountOutputType without action
   */
  export type PeminjamanCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryPeminjamanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaMinAggregateOutputType = {
    id: string | null
    nama: string | null
    isActive: boolean | null
    jurusan: string | null
    nim: string | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    isActive: boolean | null
    jurusan: string | null
    nim: string | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type MahasiswaCountAggregateOutputType = {
    id: number
    nama: number
    isActive: number
    jurusan: number
    nim: number
    cretedAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type MahasiswaMinAggregateInputType = {
    id?: true
    nama?: true
    isActive?: true
    jurusan?: true
    nim?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    id?: true
    nama?: true
    isActive?: true
    jurusan?: true
    nim?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type MahasiswaCountAggregateInputType = {
    id?: true
    nama?: true
    isActive?: true
    jurusan?: true
    nim?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswa to aggregate.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type MahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaWhereInput
    orderBy?: MahasiswaOrderByWithAggregationInput | MahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: MahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    id: string
    nama: string
    isActive: boolean
    jurusan: string
    nim: string
    cretedAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends MahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type MahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    isActive?: boolean
    jurusan?: boolean
    nim?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    peminjamans?: boolean | Mahasiswa$peminjamansArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>

  export type MahasiswaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    isActive?: boolean
    jurusan?: boolean
    nim?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mahasiswa"]>

  export type MahasiswaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    isActive?: boolean
    jurusan?: boolean
    nim?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mahasiswa"]>

  export type MahasiswaSelectScalar = {
    id?: boolean
    nama?: boolean
    isActive?: boolean
    jurusan?: boolean
    nim?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type MahasiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "isActive" | "jurusan" | "nim" | "cretedAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["mahasiswa"]>
  export type MahasiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjamans?: boolean | Mahasiswa$peminjamansArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MahasiswaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MahasiswaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mahasiswa"
    objects: {
      peminjamans: Prisma.$PeminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      isActive: boolean
      jurusan: string
      nim: string
      cretedAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }

  type MahasiswaGetPayload<S extends boolean | null | undefined | MahasiswaDefaultArgs> = $Result.GetResult<Prisma.$MahasiswaPayload, S>

  type MahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MahasiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface MahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mahasiswa'], meta: { name: 'Mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {MahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MahasiswaFindUniqueArgs>(args: SelectSubset<T, MahasiswaFindUniqueArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mahasiswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MahasiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, MahasiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MahasiswaFindFirstArgs>(args?: SelectSubset<T, MahasiswaFindFirstArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MahasiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, MahasiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mahasiswaWithIdOnly = await prisma.mahasiswa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MahasiswaFindManyArgs>(args?: SelectSubset<T, MahasiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mahasiswa.
     * @param {MahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
     */
    create<T extends MahasiswaCreateArgs>(args: SelectSubset<T, MahasiswaCreateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mahasiswas.
     * @param {MahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MahasiswaCreateManyArgs>(args?: SelectSubset<T, MahasiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mahasiswas and returns the data saved in the database.
     * @param {MahasiswaCreateManyAndReturnArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mahasiswas and only return the `id`
     * const mahasiswaWithIdOnly = await prisma.mahasiswa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MahasiswaCreateManyAndReturnArgs>(args?: SelectSubset<T, MahasiswaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mahasiswa.
     * @param {MahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
     */
    delete<T extends MahasiswaDeleteArgs>(args: SelectSubset<T, MahasiswaDeleteArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mahasiswa.
     * @param {MahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MahasiswaUpdateArgs>(args: SelectSubset<T, MahasiswaUpdateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mahasiswas.
     * @param {MahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MahasiswaDeleteManyArgs>(args?: SelectSubset<T, MahasiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MahasiswaUpdateManyArgs>(args: SelectSubset<T, MahasiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas and returns the data updated in the database.
     * @param {MahasiswaUpdateManyAndReturnArgs} args - Arguments to update many Mahasiswas.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mahasiswas and only return the `id`
     * const mahasiswaWithIdOnly = await prisma.mahasiswa.updateManyAndReturn({
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
    updateManyAndReturn<T extends MahasiswaUpdateManyAndReturnArgs>(args: SelectSubset<T, MahasiswaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mahasiswa.
     * @param {MahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
     */
    upsert<T extends MahasiswaUpsertArgs>(args: SelectSubset<T, MahasiswaUpsertArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends MahasiswaCountArgs>(
      args?: Subset<T, MahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaGroupByArgs} args - Group by arguments.
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
      T extends MahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: MahasiswaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mahasiswa model
   */
  readonly fields: MahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peminjamans<T extends Mahasiswa$peminjamansArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$peminjamansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mahasiswa model
   */
  interface MahasiswaFieldRefs {
    readonly id: FieldRef<"Mahasiswa", 'String'>
    readonly nama: FieldRef<"Mahasiswa", 'String'>
    readonly isActive: FieldRef<"Mahasiswa", 'Boolean'>
    readonly jurusan: FieldRef<"Mahasiswa", 'String'>
    readonly nim: FieldRef<"Mahasiswa", 'String'>
    readonly cretedAt: FieldRef<"Mahasiswa", 'DateTime'>
    readonly deletedAt: FieldRef<"Mahasiswa", 'DateTime'>
    readonly updatedAt: FieldRef<"Mahasiswa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mahasiswa findUnique
   */
  export type MahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findUniqueOrThrow
   */
  export type MahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findFirst
   */
  export type MahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findFirstOrThrow
   */
  export type MahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findMany
   */
  export type MahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswas to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa create
   */
  export type MahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mahasiswa.
     */
    data: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
  }

  /**
   * Mahasiswa createMany
   */
  export type MahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mahasiswas.
     */
    data: MahasiswaCreateManyInput | MahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mahasiswa createManyAndReturn
   */
  export type MahasiswaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * The data used to create many Mahasiswas.
     */
    data: MahasiswaCreateManyInput | MahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mahasiswa update
   */
  export type MahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mahasiswa.
     */
    data: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
    /**
     * Choose, which Mahasiswa to update.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa updateMany
   */
  export type MahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mahasiswas.
     */
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Mahasiswas to update
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to update.
     */
    limit?: number
  }

  /**
   * Mahasiswa updateManyAndReturn
   */
  export type MahasiswaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * The data used to update Mahasiswas.
     */
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Mahasiswas to update
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to update.
     */
    limit?: number
  }

  /**
   * Mahasiswa upsert
   */
  export type MahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mahasiswa to update in case it exists.
     */
    where: MahasiswaWhereUniqueInput
    /**
     * In case the Mahasiswa found by the `where` argument doesn't exist, create a new Mahasiswa with this data.
     */
    create: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
    /**
     * In case the Mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
  }

  /**
   * Mahasiswa delete
   */
  export type MahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter which Mahasiswa to delete.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa deleteMany
   */
  export type MahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswas to delete
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to delete.
     */
    limit?: number
  }

  /**
   * Mahasiswa.peminjamans
   */
  export type Mahasiswa$peminjamansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    where?: PeminjamanWhereInput
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    cursor?: PeminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Mahasiswa without action
   */
  export type MahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
  }


  /**
   * Model Buku
   */

  export type AggregateBuku = {
    _count: BukuCountAggregateOutputType | null
    _avg: BukuAvgAggregateOutputType | null
    _sum: BukuSumAggregateOutputType | null
    _min: BukuMinAggregateOutputType | null
    _max: BukuMaxAggregateOutputType | null
  }

  export type BukuAvgAggregateOutputType = {
    tahunTerbit: number | null
    stok: number | null
  }

  export type BukuSumAggregateOutputType = {
    tahunTerbit: number | null
    stok: number | null
  }

  export type BukuMinAggregateOutputType = {
    id: string | null
    judul: string | null
    penerbit: string | null
    tahunTerbit: number | null
    penulis: string | null
    rakId: string | null
    stok: number | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type BukuMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    penerbit: string | null
    tahunTerbit: number | null
    penulis: string | null
    rakId: string | null
    stok: number | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type BukuCountAggregateOutputType = {
    id: number
    judul: number
    penerbit: number
    tahunTerbit: number
    penulis: number
    rakId: number
    stok: number
    cretedAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type BukuAvgAggregateInputType = {
    tahunTerbit?: true
    stok?: true
  }

  export type BukuSumAggregateInputType = {
    tahunTerbit?: true
    stok?: true
  }

  export type BukuMinAggregateInputType = {
    id?: true
    judul?: true
    penerbit?: true
    tahunTerbit?: true
    penulis?: true
    rakId?: true
    stok?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type BukuMaxAggregateInputType = {
    id?: true
    judul?: true
    penerbit?: true
    tahunTerbit?: true
    penulis?: true
    rakId?: true
    stok?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type BukuCountAggregateInputType = {
    id?: true
    judul?: true
    penerbit?: true
    tahunTerbit?: true
    penulis?: true
    rakId?: true
    stok?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BukuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buku to aggregate.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bukus
    **/
    _count?: true | BukuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BukuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BukuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BukuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BukuMaxAggregateInputType
  }

  export type GetBukuAggregateType<T extends BukuAggregateArgs> = {
        [P in keyof T & keyof AggregateBuku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuku[P]>
      : GetScalarType<T[P], AggregateBuku[P]>
  }




  export type BukuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BukuWhereInput
    orderBy?: BukuOrderByWithAggregationInput | BukuOrderByWithAggregationInput[]
    by: BukuScalarFieldEnum[] | BukuScalarFieldEnum
    having?: BukuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BukuCountAggregateInputType | true
    _avg?: BukuAvgAggregateInputType
    _sum?: BukuSumAggregateInputType
    _min?: BukuMinAggregateInputType
    _max?: BukuMaxAggregateInputType
  }

  export type BukuGroupByOutputType = {
    id: string
    judul: string
    penerbit: string | null
    tahunTerbit: number | null
    penulis: string | null
    rakId: string
    stok: number
    cretedAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: BukuCountAggregateOutputType | null
    _avg: BukuAvgAggregateOutputType | null
    _sum: BukuSumAggregateOutputType | null
    _min: BukuMinAggregateOutputType | null
    _max: BukuMaxAggregateOutputType | null
  }

  type GetBukuGroupByPayload<T extends BukuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BukuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BukuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BukuGroupByOutputType[P]>
            : GetScalarType<T[P], BukuGroupByOutputType[P]>
        }
      >
    >


  export type BukuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    penerbit?: boolean
    tahunTerbit?: boolean
    penulis?: boolean
    rakId?: boolean
    stok?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    rak?: boolean | RakDefaultArgs<ExtArgs>
    details?: boolean | Buku$detailsArgs<ExtArgs>
    _count?: boolean | BukuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buku"]>

  export type BukuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    penerbit?: boolean
    tahunTerbit?: boolean
    penulis?: boolean
    rakId?: boolean
    stok?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    rak?: boolean | RakDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buku"]>

  export type BukuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    penerbit?: boolean
    tahunTerbit?: boolean
    penulis?: boolean
    rakId?: boolean
    stok?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    rak?: boolean | RakDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buku"]>

  export type BukuSelectScalar = {
    id?: boolean
    judul?: boolean
    penerbit?: boolean
    tahunTerbit?: boolean
    penulis?: boolean
    rakId?: boolean
    stok?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type BukuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "penerbit" | "tahunTerbit" | "penulis" | "rakId" | "stok" | "cretedAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["buku"]>
  export type BukuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rak?: boolean | RakDefaultArgs<ExtArgs>
    details?: boolean | Buku$detailsArgs<ExtArgs>
    _count?: boolean | BukuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BukuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rak?: boolean | RakDefaultArgs<ExtArgs>
  }
  export type BukuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rak?: boolean | RakDefaultArgs<ExtArgs>
  }

  export type $BukuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Buku"
    objects: {
      rak: Prisma.$RakPayload<ExtArgs>
      details: Prisma.$DetailPeminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      penerbit: string | null
      tahunTerbit: number | null
      penulis: string | null
      rakId: string
      stok: number
      cretedAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["buku"]>
    composites: {}
  }

  type BukuGetPayload<S extends boolean | null | undefined | BukuDefaultArgs> = $Result.GetResult<Prisma.$BukuPayload, S>

  type BukuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BukuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BukuCountAggregateInputType | true
    }

  export interface BukuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Buku'], meta: { name: 'Buku' } }
    /**
     * Find zero or one Buku that matches the filter.
     * @param {BukuFindUniqueArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BukuFindUniqueArgs>(args: SelectSubset<T, BukuFindUniqueArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Buku that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BukuFindUniqueOrThrowArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BukuFindUniqueOrThrowArgs>(args: SelectSubset<T, BukuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuFindFirstArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BukuFindFirstArgs>(args?: SelectSubset<T, BukuFindFirstArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buku that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuFindFirstOrThrowArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BukuFindFirstOrThrowArgs>(args?: SelectSubset<T, BukuFindFirstOrThrowArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bukus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bukus
     * const bukus = await prisma.buku.findMany()
     * 
     * // Get first 10 Bukus
     * const bukus = await prisma.buku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bukuWithIdOnly = await prisma.buku.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BukuFindManyArgs>(args?: SelectSubset<T, BukuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Buku.
     * @param {BukuCreateArgs} args - Arguments to create a Buku.
     * @example
     * // Create one Buku
     * const Buku = await prisma.buku.create({
     *   data: {
     *     // ... data to create a Buku
     *   }
     * })
     * 
     */
    create<T extends BukuCreateArgs>(args: SelectSubset<T, BukuCreateArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bukus.
     * @param {BukuCreateManyArgs} args - Arguments to create many Bukus.
     * @example
     * // Create many Bukus
     * const buku = await prisma.buku.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BukuCreateManyArgs>(args?: SelectSubset<T, BukuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bukus and returns the data saved in the database.
     * @param {BukuCreateManyAndReturnArgs} args - Arguments to create many Bukus.
     * @example
     * // Create many Bukus
     * const buku = await prisma.buku.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bukus and only return the `id`
     * const bukuWithIdOnly = await prisma.buku.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BukuCreateManyAndReturnArgs>(args?: SelectSubset<T, BukuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Buku.
     * @param {BukuDeleteArgs} args - Arguments to delete one Buku.
     * @example
     * // Delete one Buku
     * const Buku = await prisma.buku.delete({
     *   where: {
     *     // ... filter to delete one Buku
     *   }
     * })
     * 
     */
    delete<T extends BukuDeleteArgs>(args: SelectSubset<T, BukuDeleteArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Buku.
     * @param {BukuUpdateArgs} args - Arguments to update one Buku.
     * @example
     * // Update one Buku
     * const buku = await prisma.buku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BukuUpdateArgs>(args: SelectSubset<T, BukuUpdateArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bukus.
     * @param {BukuDeleteManyArgs} args - Arguments to filter Bukus to delete.
     * @example
     * // Delete a few Bukus
     * const { count } = await prisma.buku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BukuDeleteManyArgs>(args?: SelectSubset<T, BukuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bukus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bukus
     * const buku = await prisma.buku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BukuUpdateManyArgs>(args: SelectSubset<T, BukuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bukus and returns the data updated in the database.
     * @param {BukuUpdateManyAndReturnArgs} args - Arguments to update many Bukus.
     * @example
     * // Update many Bukus
     * const buku = await prisma.buku.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bukus and only return the `id`
     * const bukuWithIdOnly = await prisma.buku.updateManyAndReturn({
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
    updateManyAndReturn<T extends BukuUpdateManyAndReturnArgs>(args: SelectSubset<T, BukuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Buku.
     * @param {BukuUpsertArgs} args - Arguments to update or create a Buku.
     * @example
     * // Update or create a Buku
     * const buku = await prisma.buku.upsert({
     *   create: {
     *     // ... data to create a Buku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buku we want to update
     *   }
     * })
     */
    upsert<T extends BukuUpsertArgs>(args: SelectSubset<T, BukuUpsertArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bukus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuCountArgs} args - Arguments to filter Bukus to count.
     * @example
     * // Count the number of Bukus
     * const count = await prisma.buku.count({
     *   where: {
     *     // ... the filter for the Bukus we want to count
     *   }
     * })
    **/
    count<T extends BukuCountArgs>(
      args?: Subset<T, BukuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BukuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BukuAggregateArgs>(args: Subset<T, BukuAggregateArgs>): Prisma.PrismaPromise<GetBukuAggregateType<T>>

    /**
     * Group by Buku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuGroupByArgs} args - Group by arguments.
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
      T extends BukuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BukuGroupByArgs['orderBy'] }
        : { orderBy?: BukuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BukuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBukuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Buku model
   */
  readonly fields: BukuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Buku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BukuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rak<T extends RakDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RakDefaultArgs<ExtArgs>>): Prisma__RakClient<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    details<T extends Buku$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Buku$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Buku model
   */
  interface BukuFieldRefs {
    readonly id: FieldRef<"Buku", 'String'>
    readonly judul: FieldRef<"Buku", 'String'>
    readonly penerbit: FieldRef<"Buku", 'String'>
    readonly tahunTerbit: FieldRef<"Buku", 'Int'>
    readonly penulis: FieldRef<"Buku", 'String'>
    readonly rakId: FieldRef<"Buku", 'String'>
    readonly stok: FieldRef<"Buku", 'Int'>
    readonly cretedAt: FieldRef<"Buku", 'DateTime'>
    readonly deletedAt: FieldRef<"Buku", 'DateTime'>
    readonly updatedAt: FieldRef<"Buku", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Buku findUnique
   */
  export type BukuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku findUniqueOrThrow
   */
  export type BukuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku findFirst
   */
  export type BukuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bukus.
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bukus.
     */
    distinct?: BukuScalarFieldEnum | BukuScalarFieldEnum[]
  }

  /**
   * Buku findFirstOrThrow
   */
  export type BukuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bukus.
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bukus.
     */
    distinct?: BukuScalarFieldEnum | BukuScalarFieldEnum[]
  }

  /**
   * Buku findMany
   */
  export type BukuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Bukus to fetch.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bukus.
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    distinct?: BukuScalarFieldEnum | BukuScalarFieldEnum[]
  }

  /**
   * Buku create
   */
  export type BukuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * The data needed to create a Buku.
     */
    data: XOR<BukuCreateInput, BukuUncheckedCreateInput>
  }

  /**
   * Buku createMany
   */
  export type BukuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bukus.
     */
    data: BukuCreateManyInput | BukuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Buku createManyAndReturn
   */
  export type BukuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * The data used to create many Bukus.
     */
    data: BukuCreateManyInput | BukuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Buku update
   */
  export type BukuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * The data needed to update a Buku.
     */
    data: XOR<BukuUpdateInput, BukuUncheckedUpdateInput>
    /**
     * Choose, which Buku to update.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku updateMany
   */
  export type BukuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bukus.
     */
    data: XOR<BukuUpdateManyMutationInput, BukuUncheckedUpdateManyInput>
    /**
     * Filter which Bukus to update
     */
    where?: BukuWhereInput
    /**
     * Limit how many Bukus to update.
     */
    limit?: number
  }

  /**
   * Buku updateManyAndReturn
   */
  export type BukuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * The data used to update Bukus.
     */
    data: XOR<BukuUpdateManyMutationInput, BukuUncheckedUpdateManyInput>
    /**
     * Filter which Bukus to update
     */
    where?: BukuWhereInput
    /**
     * Limit how many Bukus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Buku upsert
   */
  export type BukuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * The filter to search for the Buku to update in case it exists.
     */
    where: BukuWhereUniqueInput
    /**
     * In case the Buku found by the `where` argument doesn't exist, create a new Buku with this data.
     */
    create: XOR<BukuCreateInput, BukuUncheckedCreateInput>
    /**
     * In case the Buku was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BukuUpdateInput, BukuUncheckedUpdateInput>
  }

  /**
   * Buku delete
   */
  export type BukuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter which Buku to delete.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku deleteMany
   */
  export type BukuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bukus to delete
     */
    where?: BukuWhereInput
    /**
     * Limit how many Bukus to delete.
     */
    limit?: number
  }

  /**
   * Buku.details
   */
  export type Buku$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
    where?: DetailPeminjamanWhereInput
    orderBy?: DetailPeminjamanOrderByWithRelationInput | DetailPeminjamanOrderByWithRelationInput[]
    cursor?: DetailPeminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailPeminjamanScalarFieldEnum | DetailPeminjamanScalarFieldEnum[]
  }

  /**
   * Buku without action
   */
  export type BukuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
  }


  /**
   * Model Rak
   */

  export type AggregateRak = {
    _count: RakCountAggregateOutputType | null
    _min: RakMinAggregateOutputType | null
    _max: RakMaxAggregateOutputType | null
  }

  export type RakMinAggregateOutputType = {
    id: string | null
    namaRak: string | null
    lokasi: string | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type RakMaxAggregateOutputType = {
    id: string | null
    namaRak: string | null
    lokasi: string | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type RakCountAggregateOutputType = {
    id: number
    namaRak: number
    lokasi: number
    cretedAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type RakMinAggregateInputType = {
    id?: true
    namaRak?: true
    lokasi?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type RakMaxAggregateInputType = {
    id?: true
    namaRak?: true
    lokasi?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type RakCountAggregateInputType = {
    id?: true
    namaRak?: true
    lokasi?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rak to aggregate.
     */
    where?: RakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raks to fetch.
     */
    orderBy?: RakOrderByWithRelationInput | RakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Raks
    **/
    _count?: true | RakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RakMaxAggregateInputType
  }

  export type GetRakAggregateType<T extends RakAggregateArgs> = {
        [P in keyof T & keyof AggregateRak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRak[P]>
      : GetScalarType<T[P], AggregateRak[P]>
  }




  export type RakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RakWhereInput
    orderBy?: RakOrderByWithAggregationInput | RakOrderByWithAggregationInput[]
    by: RakScalarFieldEnum[] | RakScalarFieldEnum
    having?: RakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RakCountAggregateInputType | true
    _min?: RakMinAggregateInputType
    _max?: RakMaxAggregateInputType
  }

  export type RakGroupByOutputType = {
    id: string
    namaRak: string
    lokasi: string
    cretedAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: RakCountAggregateOutputType | null
    _min: RakMinAggregateOutputType | null
    _max: RakMaxAggregateOutputType | null
  }

  type GetRakGroupByPayload<T extends RakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RakGroupByOutputType[P]>
            : GetScalarType<T[P], RakGroupByOutputType[P]>
        }
      >
    >


  export type RakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaRak?: boolean
    lokasi?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    bukuList?: boolean | Rak$bukuListArgs<ExtArgs>
    _count?: boolean | RakCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rak"]>

  export type RakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaRak?: boolean
    lokasi?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rak"]>

  export type RakSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaRak?: boolean
    lokasi?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rak"]>

  export type RakSelectScalar = {
    id?: boolean
    namaRak?: boolean
    lokasi?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type RakOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaRak" | "lokasi" | "cretedAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["rak"]>
  export type RakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bukuList?: boolean | Rak$bukuListArgs<ExtArgs>
    _count?: boolean | RakCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RakIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RakIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rak"
    objects: {
      bukuList: Prisma.$BukuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaRak: string
      lokasi: string
      cretedAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["rak"]>
    composites: {}
  }

  type RakGetPayload<S extends boolean | null | undefined | RakDefaultArgs> = $Result.GetResult<Prisma.$RakPayload, S>

  type RakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RakFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RakCountAggregateInputType | true
    }

  export interface RakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rak'], meta: { name: 'Rak' } }
    /**
     * Find zero or one Rak that matches the filter.
     * @param {RakFindUniqueArgs} args - Arguments to find a Rak
     * @example
     * // Get one Rak
     * const rak = await prisma.rak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RakFindUniqueArgs>(args: SelectSubset<T, RakFindUniqueArgs<ExtArgs>>): Prisma__RakClient<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rak that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RakFindUniqueOrThrowArgs} args - Arguments to find a Rak
     * @example
     * // Get one Rak
     * const rak = await prisma.rak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RakFindUniqueOrThrowArgs>(args: SelectSubset<T, RakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RakClient<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RakFindFirstArgs} args - Arguments to find a Rak
     * @example
     * // Get one Rak
     * const rak = await prisma.rak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RakFindFirstArgs>(args?: SelectSubset<T, RakFindFirstArgs<ExtArgs>>): Prisma__RakClient<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RakFindFirstOrThrowArgs} args - Arguments to find a Rak
     * @example
     * // Get one Rak
     * const rak = await prisma.rak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RakFindFirstOrThrowArgs>(args?: SelectSubset<T, RakFindFirstOrThrowArgs<ExtArgs>>): Prisma__RakClient<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Raks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raks
     * const raks = await prisma.rak.findMany()
     * 
     * // Get first 10 Raks
     * const raks = await prisma.rak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rakWithIdOnly = await prisma.rak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RakFindManyArgs>(args?: SelectSubset<T, RakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rak.
     * @param {RakCreateArgs} args - Arguments to create a Rak.
     * @example
     * // Create one Rak
     * const Rak = await prisma.rak.create({
     *   data: {
     *     // ... data to create a Rak
     *   }
     * })
     * 
     */
    create<T extends RakCreateArgs>(args: SelectSubset<T, RakCreateArgs<ExtArgs>>): Prisma__RakClient<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Raks.
     * @param {RakCreateManyArgs} args - Arguments to create many Raks.
     * @example
     * // Create many Raks
     * const rak = await prisma.rak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RakCreateManyArgs>(args?: SelectSubset<T, RakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Raks and returns the data saved in the database.
     * @param {RakCreateManyAndReturnArgs} args - Arguments to create many Raks.
     * @example
     * // Create many Raks
     * const rak = await prisma.rak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Raks and only return the `id`
     * const rakWithIdOnly = await prisma.rak.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RakCreateManyAndReturnArgs>(args?: SelectSubset<T, RakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rak.
     * @param {RakDeleteArgs} args - Arguments to delete one Rak.
     * @example
     * // Delete one Rak
     * const Rak = await prisma.rak.delete({
     *   where: {
     *     // ... filter to delete one Rak
     *   }
     * })
     * 
     */
    delete<T extends RakDeleteArgs>(args: SelectSubset<T, RakDeleteArgs<ExtArgs>>): Prisma__RakClient<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rak.
     * @param {RakUpdateArgs} args - Arguments to update one Rak.
     * @example
     * // Update one Rak
     * const rak = await prisma.rak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RakUpdateArgs>(args: SelectSubset<T, RakUpdateArgs<ExtArgs>>): Prisma__RakClient<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Raks.
     * @param {RakDeleteManyArgs} args - Arguments to filter Raks to delete.
     * @example
     * // Delete a few Raks
     * const { count } = await prisma.rak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RakDeleteManyArgs>(args?: SelectSubset<T, RakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raks
     * const rak = await prisma.rak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RakUpdateManyArgs>(args: SelectSubset<T, RakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raks and returns the data updated in the database.
     * @param {RakUpdateManyAndReturnArgs} args - Arguments to update many Raks.
     * @example
     * // Update many Raks
     * const rak = await prisma.rak.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Raks and only return the `id`
     * const rakWithIdOnly = await prisma.rak.updateManyAndReturn({
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
    updateManyAndReturn<T extends RakUpdateManyAndReturnArgs>(args: SelectSubset<T, RakUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rak.
     * @param {RakUpsertArgs} args - Arguments to update or create a Rak.
     * @example
     * // Update or create a Rak
     * const rak = await prisma.rak.upsert({
     *   create: {
     *     // ... data to create a Rak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rak we want to update
     *   }
     * })
     */
    upsert<T extends RakUpsertArgs>(args: SelectSubset<T, RakUpsertArgs<ExtArgs>>): Prisma__RakClient<$Result.GetResult<Prisma.$RakPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Raks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RakCountArgs} args - Arguments to filter Raks to count.
     * @example
     * // Count the number of Raks
     * const count = await prisma.rak.count({
     *   where: {
     *     // ... the filter for the Raks we want to count
     *   }
     * })
    **/
    count<T extends RakCountArgs>(
      args?: Subset<T, RakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RakAggregateArgs>(args: Subset<T, RakAggregateArgs>): Prisma.PrismaPromise<GetRakAggregateType<T>>

    /**
     * Group by Rak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RakGroupByArgs} args - Group by arguments.
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
      T extends RakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RakGroupByArgs['orderBy'] }
        : { orderBy?: RakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rak model
   */
  readonly fields: RakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bukuList<T extends Rak$bukuListArgs<ExtArgs> = {}>(args?: Subset<T, Rak$bukuListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rak model
   */
  interface RakFieldRefs {
    readonly id: FieldRef<"Rak", 'String'>
    readonly namaRak: FieldRef<"Rak", 'String'>
    readonly lokasi: FieldRef<"Rak", 'String'>
    readonly cretedAt: FieldRef<"Rak", 'DateTime'>
    readonly deletedAt: FieldRef<"Rak", 'DateTime'>
    readonly updatedAt: FieldRef<"Rak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rak findUnique
   */
  export type RakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RakInclude<ExtArgs> | null
    /**
     * Filter, which Rak to fetch.
     */
    where: RakWhereUniqueInput
  }

  /**
   * Rak findUniqueOrThrow
   */
  export type RakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RakInclude<ExtArgs> | null
    /**
     * Filter, which Rak to fetch.
     */
    where: RakWhereUniqueInput
  }

  /**
   * Rak findFirst
   */
  export type RakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RakInclude<ExtArgs> | null
    /**
     * Filter, which Rak to fetch.
     */
    where?: RakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raks to fetch.
     */
    orderBy?: RakOrderByWithRelationInput | RakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Raks.
     */
    cursor?: RakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Raks.
     */
    distinct?: RakScalarFieldEnum | RakScalarFieldEnum[]
  }

  /**
   * Rak findFirstOrThrow
   */
  export type RakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RakInclude<ExtArgs> | null
    /**
     * Filter, which Rak to fetch.
     */
    where?: RakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raks to fetch.
     */
    orderBy?: RakOrderByWithRelationInput | RakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Raks.
     */
    cursor?: RakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Raks.
     */
    distinct?: RakScalarFieldEnum | RakScalarFieldEnum[]
  }

  /**
   * Rak findMany
   */
  export type RakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RakInclude<ExtArgs> | null
    /**
     * Filter, which Raks to fetch.
     */
    where?: RakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raks to fetch.
     */
    orderBy?: RakOrderByWithRelationInput | RakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Raks.
     */
    cursor?: RakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raks.
     */
    skip?: number
    distinct?: RakScalarFieldEnum | RakScalarFieldEnum[]
  }

  /**
   * Rak create
   */
  export type RakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RakInclude<ExtArgs> | null
    /**
     * The data needed to create a Rak.
     */
    data: XOR<RakCreateInput, RakUncheckedCreateInput>
  }

  /**
   * Rak createMany
   */
  export type RakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Raks.
     */
    data: RakCreateManyInput | RakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rak createManyAndReturn
   */
  export type RakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * The data used to create many Raks.
     */
    data: RakCreateManyInput | RakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rak update
   */
  export type RakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RakInclude<ExtArgs> | null
    /**
     * The data needed to update a Rak.
     */
    data: XOR<RakUpdateInput, RakUncheckedUpdateInput>
    /**
     * Choose, which Rak to update.
     */
    where: RakWhereUniqueInput
  }

  /**
   * Rak updateMany
   */
  export type RakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Raks.
     */
    data: XOR<RakUpdateManyMutationInput, RakUncheckedUpdateManyInput>
    /**
     * Filter which Raks to update
     */
    where?: RakWhereInput
    /**
     * Limit how many Raks to update.
     */
    limit?: number
  }

  /**
   * Rak updateManyAndReturn
   */
  export type RakUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * The data used to update Raks.
     */
    data: XOR<RakUpdateManyMutationInput, RakUncheckedUpdateManyInput>
    /**
     * Filter which Raks to update
     */
    where?: RakWhereInput
    /**
     * Limit how many Raks to update.
     */
    limit?: number
  }

  /**
   * Rak upsert
   */
  export type RakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RakInclude<ExtArgs> | null
    /**
     * The filter to search for the Rak to update in case it exists.
     */
    where: RakWhereUniqueInput
    /**
     * In case the Rak found by the `where` argument doesn't exist, create a new Rak with this data.
     */
    create: XOR<RakCreateInput, RakUncheckedCreateInput>
    /**
     * In case the Rak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RakUpdateInput, RakUncheckedUpdateInput>
  }

  /**
   * Rak delete
   */
  export type RakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RakInclude<ExtArgs> | null
    /**
     * Filter which Rak to delete.
     */
    where: RakWhereUniqueInput
  }

  /**
   * Rak deleteMany
   */
  export type RakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Raks to delete
     */
    where?: RakWhereInput
    /**
     * Limit how many Raks to delete.
     */
    limit?: number
  }

  /**
   * Rak.bukuList
   */
  export type Rak$bukuListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    where?: BukuWhereInput
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    cursor?: BukuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BukuScalarFieldEnum | BukuScalarFieldEnum[]
  }

  /**
   * Rak without action
   */
  export type RakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rak
     */
    select?: RakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rak
     */
    omit?: RakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RakInclude<ExtArgs> | null
  }


  /**
   * Model Peminjaman
   */

  export type AggregatePeminjaman = {
    _count: PeminjamanCountAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  export type PeminjamanMinAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    tanggalPinjam: Date | null
    tanggalKembali: Date | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type PeminjamanMaxAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    tanggalPinjam: Date | null
    tanggalKembali: Date | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type PeminjamanCountAggregateOutputType = {
    id: number
    mahasiswaId: number
    tanggalPinjam: number
    tanggalKembali: number
    cretedAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type PeminjamanMinAggregateInputType = {
    id?: true
    mahasiswaId?: true
    tanggalPinjam?: true
    tanggalKembali?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type PeminjamanMaxAggregateInputType = {
    id?: true
    mahasiswaId?: true
    tanggalPinjam?: true
    tanggalKembali?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type PeminjamanCountAggregateInputType = {
    id?: true
    mahasiswaId?: true
    tanggalPinjam?: true
    tanggalKembali?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PeminjamanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peminjaman to aggregate.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peminjamen
    **/
    _count?: true | PeminjamanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeminjamanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeminjamanMaxAggregateInputType
  }

  export type GetPeminjamanAggregateType<T extends PeminjamanAggregateArgs> = {
        [P in keyof T & keyof AggregatePeminjaman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeminjaman[P]>
      : GetScalarType<T[P], AggregatePeminjaman[P]>
  }




  export type PeminjamanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanWhereInput
    orderBy?: PeminjamanOrderByWithAggregationInput | PeminjamanOrderByWithAggregationInput[]
    by: PeminjamanScalarFieldEnum[] | PeminjamanScalarFieldEnum
    having?: PeminjamanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeminjamanCountAggregateInputType | true
    _min?: PeminjamanMinAggregateInputType
    _max?: PeminjamanMaxAggregateInputType
  }

  export type PeminjamanGroupByOutputType = {
    id: string
    mahasiswaId: string
    tanggalPinjam: Date
    tanggalKembali: Date | null
    cretedAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: PeminjamanCountAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  type GetPeminjamanGroupByPayload<T extends PeminjamanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeminjamanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeminjamanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
            : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
        }
      >
    >


  export type PeminjamanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mahasiswaId?: boolean
    tanggalPinjam?: boolean
    tanggalKembali?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    details?: boolean | Peminjaman$detailsArgs<ExtArgs>
    histories?: boolean | Peminjaman$historiesArgs<ExtArgs>
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    _count?: boolean | PeminjamanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type PeminjamanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mahasiswaId?: boolean
    tanggalPinjam?: boolean
    tanggalKembali?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type PeminjamanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mahasiswaId?: boolean
    tanggalPinjam?: boolean
    tanggalKembali?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type PeminjamanSelectScalar = {
    id?: boolean
    mahasiswaId?: boolean
    tanggalPinjam?: boolean
    tanggalKembali?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type PeminjamanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mahasiswaId" | "tanggalPinjam" | "tanggalKembali" | "cretedAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["peminjaman"]>
  export type PeminjamanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | Peminjaman$detailsArgs<ExtArgs>
    histories?: boolean | Peminjaman$historiesArgs<ExtArgs>
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    _count?: boolean | PeminjamanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeminjamanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }
  export type PeminjamanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }

  export type $PeminjamanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peminjaman"
    objects: {
      details: Prisma.$DetailPeminjamanPayload<ExtArgs>[]
      histories: Prisma.$HistoryPeminjamanPayload<ExtArgs>[]
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mahasiswaId: string
      tanggalPinjam: Date
      tanggalKembali: Date | null
      cretedAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["peminjaman"]>
    composites: {}
  }

  type PeminjamanGetPayload<S extends boolean | null | undefined | PeminjamanDefaultArgs> = $Result.GetResult<Prisma.$PeminjamanPayload, S>

  type PeminjamanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeminjamanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeminjamanCountAggregateInputType | true
    }

  export interface PeminjamanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peminjaman'], meta: { name: 'Peminjaman' } }
    /**
     * Find zero or one Peminjaman that matches the filter.
     * @param {PeminjamanFindUniqueArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeminjamanFindUniqueArgs>(args: SelectSubset<T, PeminjamanFindUniqueArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peminjaman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeminjamanFindUniqueOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeminjamanFindUniqueOrThrowArgs>(args: SelectSubset<T, PeminjamanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindFirstArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeminjamanFindFirstArgs>(args?: SelectSubset<T, PeminjamanFindFirstArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindFirstOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeminjamanFindFirstOrThrowArgs>(args?: SelectSubset<T, PeminjamanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peminjamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany()
     * 
     * // Get first 10 Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peminjamanWithIdOnly = await prisma.peminjaman.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeminjamanFindManyArgs>(args?: SelectSubset<T, PeminjamanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peminjaman.
     * @param {PeminjamanCreateArgs} args - Arguments to create a Peminjaman.
     * @example
     * // Create one Peminjaman
     * const Peminjaman = await prisma.peminjaman.create({
     *   data: {
     *     // ... data to create a Peminjaman
     *   }
     * })
     * 
     */
    create<T extends PeminjamanCreateArgs>(args: SelectSubset<T, PeminjamanCreateArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peminjamen.
     * @param {PeminjamanCreateManyArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeminjamanCreateManyArgs>(args?: SelectSubset<T, PeminjamanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Peminjamen and returns the data saved in the database.
     * @param {PeminjamanCreateManyAndReturnArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Peminjamen and only return the `id`
     * const peminjamanWithIdOnly = await prisma.peminjaman.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeminjamanCreateManyAndReturnArgs>(args?: SelectSubset<T, PeminjamanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Peminjaman.
     * @param {PeminjamanDeleteArgs} args - Arguments to delete one Peminjaman.
     * @example
     * // Delete one Peminjaman
     * const Peminjaman = await prisma.peminjaman.delete({
     *   where: {
     *     // ... filter to delete one Peminjaman
     *   }
     * })
     * 
     */
    delete<T extends PeminjamanDeleteArgs>(args: SelectSubset<T, PeminjamanDeleteArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peminjaman.
     * @param {PeminjamanUpdateArgs} args - Arguments to update one Peminjaman.
     * @example
     * // Update one Peminjaman
     * const peminjaman = await prisma.peminjaman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeminjamanUpdateArgs>(args: SelectSubset<T, PeminjamanUpdateArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peminjamen.
     * @param {PeminjamanDeleteManyArgs} args - Arguments to filter Peminjamen to delete.
     * @example
     * // Delete a few Peminjamen
     * const { count } = await prisma.peminjaman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeminjamanDeleteManyArgs>(args?: SelectSubset<T, PeminjamanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeminjamanUpdateManyArgs>(args: SelectSubset<T, PeminjamanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen and returns the data updated in the database.
     * @param {PeminjamanUpdateManyAndReturnArgs} args - Arguments to update many Peminjamen.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Peminjamen and only return the `id`
     * const peminjamanWithIdOnly = await prisma.peminjaman.updateManyAndReturn({
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
    updateManyAndReturn<T extends PeminjamanUpdateManyAndReturnArgs>(args: SelectSubset<T, PeminjamanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Peminjaman.
     * @param {PeminjamanUpsertArgs} args - Arguments to update or create a Peminjaman.
     * @example
     * // Update or create a Peminjaman
     * const peminjaman = await prisma.peminjaman.upsert({
     *   create: {
     *     // ... data to create a Peminjaman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peminjaman we want to update
     *   }
     * })
     */
    upsert<T extends PeminjamanUpsertArgs>(args: SelectSubset<T, PeminjamanUpsertArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanCountArgs} args - Arguments to filter Peminjamen to count.
     * @example
     * // Count the number of Peminjamen
     * const count = await prisma.peminjaman.count({
     *   where: {
     *     // ... the filter for the Peminjamen we want to count
     *   }
     * })
    **/
    count<T extends PeminjamanCountArgs>(
      args?: Subset<T, PeminjamanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeminjamanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeminjamanAggregateArgs>(args: Subset<T, PeminjamanAggregateArgs>): Prisma.PrismaPromise<GetPeminjamanAggregateType<T>>

    /**
     * Group by Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanGroupByArgs} args - Group by arguments.
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
      T extends PeminjamanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeminjamanGroupByArgs['orderBy'] }
        : { orderBy?: PeminjamanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeminjamanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeminjamanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peminjaman model
   */
  readonly fields: PeminjamanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peminjaman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeminjamanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    details<T extends Peminjaman$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Peminjaman$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    histories<T extends Peminjaman$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Peminjaman$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Peminjaman model
   */
  interface PeminjamanFieldRefs {
    readonly id: FieldRef<"Peminjaman", 'String'>
    readonly mahasiswaId: FieldRef<"Peminjaman", 'String'>
    readonly tanggalPinjam: FieldRef<"Peminjaman", 'DateTime'>
    readonly tanggalKembali: FieldRef<"Peminjaman", 'DateTime'>
    readonly cretedAt: FieldRef<"Peminjaman", 'DateTime'>
    readonly deletedAt: FieldRef<"Peminjaman", 'DateTime'>
    readonly updatedAt: FieldRef<"Peminjaman", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Peminjaman findUnique
   */
  export type PeminjamanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman findUniqueOrThrow
   */
  export type PeminjamanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman findFirst
   */
  export type PeminjamanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman findFirstOrThrow
   */
  export type PeminjamanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman findMany
   */
  export type PeminjamanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjamen to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman create
   */
  export type PeminjamanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to create a Peminjaman.
     */
    data: XOR<PeminjamanCreateInput, PeminjamanUncheckedCreateInput>
  }

  /**
   * Peminjaman createMany
   */
  export type PeminjamanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peminjamen.
     */
    data: PeminjamanCreateManyInput | PeminjamanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peminjaman createManyAndReturn
   */
  export type PeminjamanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * The data used to create many Peminjamen.
     */
    data: PeminjamanCreateManyInput | PeminjamanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Peminjaman update
   */
  export type PeminjamanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to update a Peminjaman.
     */
    data: XOR<PeminjamanUpdateInput, PeminjamanUncheckedUpdateInput>
    /**
     * Choose, which Peminjaman to update.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman updateMany
   */
  export type PeminjamanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peminjamen.
     */
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyInput>
    /**
     * Filter which Peminjamen to update
     */
    where?: PeminjamanWhereInput
    /**
     * Limit how many Peminjamen to update.
     */
    limit?: number
  }

  /**
   * Peminjaman updateManyAndReturn
   */
  export type PeminjamanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * The data used to update Peminjamen.
     */
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyInput>
    /**
     * Filter which Peminjamen to update
     */
    where?: PeminjamanWhereInput
    /**
     * Limit how many Peminjamen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Peminjaman upsert
   */
  export type PeminjamanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The filter to search for the Peminjaman to update in case it exists.
     */
    where: PeminjamanWhereUniqueInput
    /**
     * In case the Peminjaman found by the `where` argument doesn't exist, create a new Peminjaman with this data.
     */
    create: XOR<PeminjamanCreateInput, PeminjamanUncheckedCreateInput>
    /**
     * In case the Peminjaman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeminjamanUpdateInput, PeminjamanUncheckedUpdateInput>
  }

  /**
   * Peminjaman delete
   */
  export type PeminjamanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter which Peminjaman to delete.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman deleteMany
   */
  export type PeminjamanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peminjamen to delete
     */
    where?: PeminjamanWhereInput
    /**
     * Limit how many Peminjamen to delete.
     */
    limit?: number
  }

  /**
   * Peminjaman.details
   */
  export type Peminjaman$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
    where?: DetailPeminjamanWhereInput
    orderBy?: DetailPeminjamanOrderByWithRelationInput | DetailPeminjamanOrderByWithRelationInput[]
    cursor?: DetailPeminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailPeminjamanScalarFieldEnum | DetailPeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman.histories
   */
  export type Peminjaman$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanInclude<ExtArgs> | null
    where?: HistoryPeminjamanWhereInput
    orderBy?: HistoryPeminjamanOrderByWithRelationInput | HistoryPeminjamanOrderByWithRelationInput[]
    cursor?: HistoryPeminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryPeminjamanScalarFieldEnum | HistoryPeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman without action
   */
  export type PeminjamanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
  }


  /**
   * Model DetailPeminjaman
   */

  export type AggregateDetailPeminjaman = {
    _count: DetailPeminjamanCountAggregateOutputType | null
    _min: DetailPeminjamanMinAggregateOutputType | null
    _max: DetailPeminjamanMaxAggregateOutputType | null
  }

  export type DetailPeminjamanMinAggregateOutputType = {
    id: string | null
    peminjamanId: string | null
    bukuId: string | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type DetailPeminjamanMaxAggregateOutputType = {
    id: string | null
    peminjamanId: string | null
    bukuId: string | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type DetailPeminjamanCountAggregateOutputType = {
    id: number
    peminjamanId: number
    bukuId: number
    cretedAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type DetailPeminjamanMinAggregateInputType = {
    id?: true
    peminjamanId?: true
    bukuId?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type DetailPeminjamanMaxAggregateInputType = {
    id?: true
    peminjamanId?: true
    bukuId?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type DetailPeminjamanCountAggregateInputType = {
    id?: true
    peminjamanId?: true
    bukuId?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DetailPeminjamanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPeminjaman to aggregate.
     */
    where?: DetailPeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPeminjamen to fetch.
     */
    orderBy?: DetailPeminjamanOrderByWithRelationInput | DetailPeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailPeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPeminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPeminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailPeminjamen
    **/
    _count?: true | DetailPeminjamanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailPeminjamanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailPeminjamanMaxAggregateInputType
  }

  export type GetDetailPeminjamanAggregateType<T extends DetailPeminjamanAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailPeminjaman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailPeminjaman[P]>
      : GetScalarType<T[P], AggregateDetailPeminjaman[P]>
  }




  export type DetailPeminjamanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPeminjamanWhereInput
    orderBy?: DetailPeminjamanOrderByWithAggregationInput | DetailPeminjamanOrderByWithAggregationInput[]
    by: DetailPeminjamanScalarFieldEnum[] | DetailPeminjamanScalarFieldEnum
    having?: DetailPeminjamanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailPeminjamanCountAggregateInputType | true
    _min?: DetailPeminjamanMinAggregateInputType
    _max?: DetailPeminjamanMaxAggregateInputType
  }

  export type DetailPeminjamanGroupByOutputType = {
    id: string
    peminjamanId: string
    bukuId: string
    cretedAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: DetailPeminjamanCountAggregateOutputType | null
    _min: DetailPeminjamanMinAggregateOutputType | null
    _max: DetailPeminjamanMaxAggregateOutputType | null
  }

  type GetDetailPeminjamanGroupByPayload<T extends DetailPeminjamanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailPeminjamanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailPeminjamanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailPeminjamanGroupByOutputType[P]>
            : GetScalarType<T[P], DetailPeminjamanGroupByOutputType[P]>
        }
      >
    >


  export type DetailPeminjamanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    bukuId?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailPeminjaman"]>

  export type DetailPeminjamanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    bukuId?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailPeminjaman"]>

  export type DetailPeminjamanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    bukuId?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailPeminjaman"]>

  export type DetailPeminjamanSelectScalar = {
    id?: boolean
    peminjamanId?: boolean
    bukuId?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type DetailPeminjamanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peminjamanId" | "bukuId" | "cretedAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["detailPeminjaman"]>
  export type DetailPeminjamanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }
  export type DetailPeminjamanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }
  export type DetailPeminjamanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }

  export type $DetailPeminjamanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailPeminjaman"
    objects: {
      buku: Prisma.$BukuPayload<ExtArgs>
      peminjaman: Prisma.$PeminjamanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      peminjamanId: string
      bukuId: string
      cretedAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["detailPeminjaman"]>
    composites: {}
  }

  type DetailPeminjamanGetPayload<S extends boolean | null | undefined | DetailPeminjamanDefaultArgs> = $Result.GetResult<Prisma.$DetailPeminjamanPayload, S>

  type DetailPeminjamanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailPeminjamanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailPeminjamanCountAggregateInputType | true
    }

  export interface DetailPeminjamanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailPeminjaman'], meta: { name: 'DetailPeminjaman' } }
    /**
     * Find zero or one DetailPeminjaman that matches the filter.
     * @param {DetailPeminjamanFindUniqueArgs} args - Arguments to find a DetailPeminjaman
     * @example
     * // Get one DetailPeminjaman
     * const detailPeminjaman = await prisma.detailPeminjaman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailPeminjamanFindUniqueArgs>(args: SelectSubset<T, DetailPeminjamanFindUniqueArgs<ExtArgs>>): Prisma__DetailPeminjamanClient<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailPeminjaman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailPeminjamanFindUniqueOrThrowArgs} args - Arguments to find a DetailPeminjaman
     * @example
     * // Get one DetailPeminjaman
     * const detailPeminjaman = await prisma.detailPeminjaman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailPeminjamanFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailPeminjamanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailPeminjamanClient<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailPeminjaman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPeminjamanFindFirstArgs} args - Arguments to find a DetailPeminjaman
     * @example
     * // Get one DetailPeminjaman
     * const detailPeminjaman = await prisma.detailPeminjaman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailPeminjamanFindFirstArgs>(args?: SelectSubset<T, DetailPeminjamanFindFirstArgs<ExtArgs>>): Prisma__DetailPeminjamanClient<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailPeminjaman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPeminjamanFindFirstOrThrowArgs} args - Arguments to find a DetailPeminjaman
     * @example
     * // Get one DetailPeminjaman
     * const detailPeminjaman = await prisma.detailPeminjaman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailPeminjamanFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailPeminjamanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailPeminjamanClient<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailPeminjamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPeminjamanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailPeminjamen
     * const detailPeminjamen = await prisma.detailPeminjaman.findMany()
     * 
     * // Get first 10 DetailPeminjamen
     * const detailPeminjamen = await prisma.detailPeminjaman.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailPeminjamanWithIdOnly = await prisma.detailPeminjaman.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailPeminjamanFindManyArgs>(args?: SelectSubset<T, DetailPeminjamanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailPeminjaman.
     * @param {DetailPeminjamanCreateArgs} args - Arguments to create a DetailPeminjaman.
     * @example
     * // Create one DetailPeminjaman
     * const DetailPeminjaman = await prisma.detailPeminjaman.create({
     *   data: {
     *     // ... data to create a DetailPeminjaman
     *   }
     * })
     * 
     */
    create<T extends DetailPeminjamanCreateArgs>(args: SelectSubset<T, DetailPeminjamanCreateArgs<ExtArgs>>): Prisma__DetailPeminjamanClient<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailPeminjamen.
     * @param {DetailPeminjamanCreateManyArgs} args - Arguments to create many DetailPeminjamen.
     * @example
     * // Create many DetailPeminjamen
     * const detailPeminjaman = await prisma.detailPeminjaman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailPeminjamanCreateManyArgs>(args?: SelectSubset<T, DetailPeminjamanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetailPeminjamen and returns the data saved in the database.
     * @param {DetailPeminjamanCreateManyAndReturnArgs} args - Arguments to create many DetailPeminjamen.
     * @example
     * // Create many DetailPeminjamen
     * const detailPeminjaman = await prisma.detailPeminjaman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetailPeminjamen and only return the `id`
     * const detailPeminjamanWithIdOnly = await prisma.detailPeminjaman.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailPeminjamanCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailPeminjamanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetailPeminjaman.
     * @param {DetailPeminjamanDeleteArgs} args - Arguments to delete one DetailPeminjaman.
     * @example
     * // Delete one DetailPeminjaman
     * const DetailPeminjaman = await prisma.detailPeminjaman.delete({
     *   where: {
     *     // ... filter to delete one DetailPeminjaman
     *   }
     * })
     * 
     */
    delete<T extends DetailPeminjamanDeleteArgs>(args: SelectSubset<T, DetailPeminjamanDeleteArgs<ExtArgs>>): Prisma__DetailPeminjamanClient<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailPeminjaman.
     * @param {DetailPeminjamanUpdateArgs} args - Arguments to update one DetailPeminjaman.
     * @example
     * // Update one DetailPeminjaman
     * const detailPeminjaman = await prisma.detailPeminjaman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailPeminjamanUpdateArgs>(args: SelectSubset<T, DetailPeminjamanUpdateArgs<ExtArgs>>): Prisma__DetailPeminjamanClient<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailPeminjamen.
     * @param {DetailPeminjamanDeleteManyArgs} args - Arguments to filter DetailPeminjamen to delete.
     * @example
     * // Delete a few DetailPeminjamen
     * const { count } = await prisma.detailPeminjaman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailPeminjamanDeleteManyArgs>(args?: SelectSubset<T, DetailPeminjamanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailPeminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPeminjamanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailPeminjamen
     * const detailPeminjaman = await prisma.detailPeminjaman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailPeminjamanUpdateManyArgs>(args: SelectSubset<T, DetailPeminjamanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailPeminjamen and returns the data updated in the database.
     * @param {DetailPeminjamanUpdateManyAndReturnArgs} args - Arguments to update many DetailPeminjamen.
     * @example
     * // Update many DetailPeminjamen
     * const detailPeminjaman = await prisma.detailPeminjaman.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetailPeminjamen and only return the `id`
     * const detailPeminjamanWithIdOnly = await prisma.detailPeminjaman.updateManyAndReturn({
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
    updateManyAndReturn<T extends DetailPeminjamanUpdateManyAndReturnArgs>(args: SelectSubset<T, DetailPeminjamanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetailPeminjaman.
     * @param {DetailPeminjamanUpsertArgs} args - Arguments to update or create a DetailPeminjaman.
     * @example
     * // Update or create a DetailPeminjaman
     * const detailPeminjaman = await prisma.detailPeminjaman.upsert({
     *   create: {
     *     // ... data to create a DetailPeminjaman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailPeminjaman we want to update
     *   }
     * })
     */
    upsert<T extends DetailPeminjamanUpsertArgs>(args: SelectSubset<T, DetailPeminjamanUpsertArgs<ExtArgs>>): Prisma__DetailPeminjamanClient<$Result.GetResult<Prisma.$DetailPeminjamanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailPeminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPeminjamanCountArgs} args - Arguments to filter DetailPeminjamen to count.
     * @example
     * // Count the number of DetailPeminjamen
     * const count = await prisma.detailPeminjaman.count({
     *   where: {
     *     // ... the filter for the DetailPeminjamen we want to count
     *   }
     * })
    **/
    count<T extends DetailPeminjamanCountArgs>(
      args?: Subset<T, DetailPeminjamanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailPeminjamanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailPeminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPeminjamanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailPeminjamanAggregateArgs>(args: Subset<T, DetailPeminjamanAggregateArgs>): Prisma.PrismaPromise<GetDetailPeminjamanAggregateType<T>>

    /**
     * Group by DetailPeminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPeminjamanGroupByArgs} args - Group by arguments.
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
      T extends DetailPeminjamanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailPeminjamanGroupByArgs['orderBy'] }
        : { orderBy?: DetailPeminjamanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetailPeminjamanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailPeminjamanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailPeminjaman model
   */
  readonly fields: DetailPeminjamanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailPeminjaman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailPeminjamanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buku<T extends BukuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BukuDefaultArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    peminjaman<T extends PeminjamanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeminjamanDefaultArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetailPeminjaman model
   */
  interface DetailPeminjamanFieldRefs {
    readonly id: FieldRef<"DetailPeminjaman", 'String'>
    readonly peminjamanId: FieldRef<"DetailPeminjaman", 'String'>
    readonly bukuId: FieldRef<"DetailPeminjaman", 'String'>
    readonly cretedAt: FieldRef<"DetailPeminjaman", 'DateTime'>
    readonly deletedAt: FieldRef<"DetailPeminjaman", 'DateTime'>
    readonly updatedAt: FieldRef<"DetailPeminjaman", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DetailPeminjaman findUnique
   */
  export type DetailPeminjamanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which DetailPeminjaman to fetch.
     */
    where: DetailPeminjamanWhereUniqueInput
  }

  /**
   * DetailPeminjaman findUniqueOrThrow
   */
  export type DetailPeminjamanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which DetailPeminjaman to fetch.
     */
    where: DetailPeminjamanWhereUniqueInput
  }

  /**
   * DetailPeminjaman findFirst
   */
  export type DetailPeminjamanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which DetailPeminjaman to fetch.
     */
    where?: DetailPeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPeminjamen to fetch.
     */
    orderBy?: DetailPeminjamanOrderByWithRelationInput | DetailPeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailPeminjamen.
     */
    cursor?: DetailPeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPeminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPeminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPeminjamen.
     */
    distinct?: DetailPeminjamanScalarFieldEnum | DetailPeminjamanScalarFieldEnum[]
  }

  /**
   * DetailPeminjaman findFirstOrThrow
   */
  export type DetailPeminjamanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which DetailPeminjaman to fetch.
     */
    where?: DetailPeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPeminjamen to fetch.
     */
    orderBy?: DetailPeminjamanOrderByWithRelationInput | DetailPeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailPeminjamen.
     */
    cursor?: DetailPeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPeminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPeminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPeminjamen.
     */
    distinct?: DetailPeminjamanScalarFieldEnum | DetailPeminjamanScalarFieldEnum[]
  }

  /**
   * DetailPeminjaman findMany
   */
  export type DetailPeminjamanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which DetailPeminjamen to fetch.
     */
    where?: DetailPeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPeminjamen to fetch.
     */
    orderBy?: DetailPeminjamanOrderByWithRelationInput | DetailPeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailPeminjamen.
     */
    cursor?: DetailPeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPeminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPeminjamen.
     */
    skip?: number
    distinct?: DetailPeminjamanScalarFieldEnum | DetailPeminjamanScalarFieldEnum[]
  }

  /**
   * DetailPeminjaman create
   */
  export type DetailPeminjamanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailPeminjaman.
     */
    data: XOR<DetailPeminjamanCreateInput, DetailPeminjamanUncheckedCreateInput>
  }

  /**
   * DetailPeminjaman createMany
   */
  export type DetailPeminjamanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailPeminjamen.
     */
    data: DetailPeminjamanCreateManyInput | DetailPeminjamanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailPeminjaman createManyAndReturn
   */
  export type DetailPeminjamanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * The data used to create many DetailPeminjamen.
     */
    data: DetailPeminjamanCreateManyInput | DetailPeminjamanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailPeminjaman update
   */
  export type DetailPeminjamanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailPeminjaman.
     */
    data: XOR<DetailPeminjamanUpdateInput, DetailPeminjamanUncheckedUpdateInput>
    /**
     * Choose, which DetailPeminjaman to update.
     */
    where: DetailPeminjamanWhereUniqueInput
  }

  /**
   * DetailPeminjaman updateMany
   */
  export type DetailPeminjamanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailPeminjamen.
     */
    data: XOR<DetailPeminjamanUpdateManyMutationInput, DetailPeminjamanUncheckedUpdateManyInput>
    /**
     * Filter which DetailPeminjamen to update
     */
    where?: DetailPeminjamanWhereInput
    /**
     * Limit how many DetailPeminjamen to update.
     */
    limit?: number
  }

  /**
   * DetailPeminjaman updateManyAndReturn
   */
  export type DetailPeminjamanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * The data used to update DetailPeminjamen.
     */
    data: XOR<DetailPeminjamanUpdateManyMutationInput, DetailPeminjamanUncheckedUpdateManyInput>
    /**
     * Filter which DetailPeminjamen to update
     */
    where?: DetailPeminjamanWhereInput
    /**
     * Limit how many DetailPeminjamen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailPeminjaman upsert
   */
  export type DetailPeminjamanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailPeminjaman to update in case it exists.
     */
    where: DetailPeminjamanWhereUniqueInput
    /**
     * In case the DetailPeminjaman found by the `where` argument doesn't exist, create a new DetailPeminjaman with this data.
     */
    create: XOR<DetailPeminjamanCreateInput, DetailPeminjamanUncheckedCreateInput>
    /**
     * In case the DetailPeminjaman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailPeminjamanUpdateInput, DetailPeminjamanUncheckedUpdateInput>
  }

  /**
   * DetailPeminjaman delete
   */
  export type DetailPeminjamanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
    /**
     * Filter which DetailPeminjaman to delete.
     */
    where: DetailPeminjamanWhereUniqueInput
  }

  /**
   * DetailPeminjaman deleteMany
   */
  export type DetailPeminjamanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPeminjamen to delete
     */
    where?: DetailPeminjamanWhereInput
    /**
     * Limit how many DetailPeminjamen to delete.
     */
    limit?: number
  }

  /**
   * DetailPeminjaman without action
   */
  export type DetailPeminjamanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPeminjaman
     */
    select?: DetailPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPeminjaman
     */
    omit?: DetailPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPeminjamanInclude<ExtArgs> | null
  }


  /**
   * Model HistoryPeminjaman
   */

  export type AggregateHistoryPeminjaman = {
    _count: HistoryPeminjamanCountAggregateOutputType | null
    _min: HistoryPeminjamanMinAggregateOutputType | null
    _max: HistoryPeminjamanMaxAggregateOutputType | null
  }

  export type HistoryPeminjamanMinAggregateOutputType = {
    id: string | null
    peminjamanId: string | null
    status: string | null
    tanggalStatus: Date | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type HistoryPeminjamanMaxAggregateOutputType = {
    id: string | null
    peminjamanId: string | null
    status: string | null
    tanggalStatus: Date | null
    cretedAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type HistoryPeminjamanCountAggregateOutputType = {
    id: number
    peminjamanId: number
    status: number
    tanggalStatus: number
    cretedAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type HistoryPeminjamanMinAggregateInputType = {
    id?: true
    peminjamanId?: true
    status?: true
    tanggalStatus?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type HistoryPeminjamanMaxAggregateInputType = {
    id?: true
    peminjamanId?: true
    status?: true
    tanggalStatus?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type HistoryPeminjamanCountAggregateInputType = {
    id?: true
    peminjamanId?: true
    status?: true
    tanggalStatus?: true
    cretedAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HistoryPeminjamanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryPeminjaman to aggregate.
     */
    where?: HistoryPeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryPeminjamen to fetch.
     */
    orderBy?: HistoryPeminjamanOrderByWithRelationInput | HistoryPeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryPeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryPeminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryPeminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoryPeminjamen
    **/
    _count?: true | HistoryPeminjamanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryPeminjamanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryPeminjamanMaxAggregateInputType
  }

  export type GetHistoryPeminjamanAggregateType<T extends HistoryPeminjamanAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoryPeminjaman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoryPeminjaman[P]>
      : GetScalarType<T[P], AggregateHistoryPeminjaman[P]>
  }




  export type HistoryPeminjamanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryPeminjamanWhereInput
    orderBy?: HistoryPeminjamanOrderByWithAggregationInput | HistoryPeminjamanOrderByWithAggregationInput[]
    by: HistoryPeminjamanScalarFieldEnum[] | HistoryPeminjamanScalarFieldEnum
    having?: HistoryPeminjamanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryPeminjamanCountAggregateInputType | true
    _min?: HistoryPeminjamanMinAggregateInputType
    _max?: HistoryPeminjamanMaxAggregateInputType
  }

  export type HistoryPeminjamanGroupByOutputType = {
    id: string
    peminjamanId: string
    status: string
    tanggalStatus: Date
    cretedAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: HistoryPeminjamanCountAggregateOutputType | null
    _min: HistoryPeminjamanMinAggregateOutputType | null
    _max: HistoryPeminjamanMaxAggregateOutputType | null
  }

  type GetHistoryPeminjamanGroupByPayload<T extends HistoryPeminjamanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryPeminjamanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryPeminjamanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryPeminjamanGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryPeminjamanGroupByOutputType[P]>
        }
      >
    >


  export type HistoryPeminjamanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    status?: boolean
    tanggalStatus?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyPeminjaman"]>

  export type HistoryPeminjamanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    status?: boolean
    tanggalStatus?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyPeminjaman"]>

  export type HistoryPeminjamanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    status?: boolean
    tanggalStatus?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyPeminjaman"]>

  export type HistoryPeminjamanSelectScalar = {
    id?: boolean
    peminjamanId?: boolean
    status?: boolean
    tanggalStatus?: boolean
    cretedAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type HistoryPeminjamanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peminjamanId" | "status" | "tanggalStatus" | "cretedAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["historyPeminjaman"]>
  export type HistoryPeminjamanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }
  export type HistoryPeminjamanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }
  export type HistoryPeminjamanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | PeminjamanDefaultArgs<ExtArgs>
  }

  export type $HistoryPeminjamanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoryPeminjaman"
    objects: {
      peminjaman: Prisma.$PeminjamanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      peminjamanId: string
      status: string
      tanggalStatus: Date
      cretedAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["historyPeminjaman"]>
    composites: {}
  }

  type HistoryPeminjamanGetPayload<S extends boolean | null | undefined | HistoryPeminjamanDefaultArgs> = $Result.GetResult<Prisma.$HistoryPeminjamanPayload, S>

  type HistoryPeminjamanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryPeminjamanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryPeminjamanCountAggregateInputType | true
    }

  export interface HistoryPeminjamanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoryPeminjaman'], meta: { name: 'HistoryPeminjaman' } }
    /**
     * Find zero or one HistoryPeminjaman that matches the filter.
     * @param {HistoryPeminjamanFindUniqueArgs} args - Arguments to find a HistoryPeminjaman
     * @example
     * // Get one HistoryPeminjaman
     * const historyPeminjaman = await prisma.historyPeminjaman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryPeminjamanFindUniqueArgs>(args: SelectSubset<T, HistoryPeminjamanFindUniqueArgs<ExtArgs>>): Prisma__HistoryPeminjamanClient<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoryPeminjaman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryPeminjamanFindUniqueOrThrowArgs} args - Arguments to find a HistoryPeminjaman
     * @example
     * // Get one HistoryPeminjaman
     * const historyPeminjaman = await prisma.historyPeminjaman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryPeminjamanFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryPeminjamanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryPeminjamanClient<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryPeminjaman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryPeminjamanFindFirstArgs} args - Arguments to find a HistoryPeminjaman
     * @example
     * // Get one HistoryPeminjaman
     * const historyPeminjaman = await prisma.historyPeminjaman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryPeminjamanFindFirstArgs>(args?: SelectSubset<T, HistoryPeminjamanFindFirstArgs<ExtArgs>>): Prisma__HistoryPeminjamanClient<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryPeminjaman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryPeminjamanFindFirstOrThrowArgs} args - Arguments to find a HistoryPeminjaman
     * @example
     * // Get one HistoryPeminjaman
     * const historyPeminjaman = await prisma.historyPeminjaman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryPeminjamanFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryPeminjamanFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryPeminjamanClient<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoryPeminjamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryPeminjamanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoryPeminjamen
     * const historyPeminjamen = await prisma.historyPeminjaman.findMany()
     * 
     * // Get first 10 HistoryPeminjamen
     * const historyPeminjamen = await prisma.historyPeminjaman.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyPeminjamanWithIdOnly = await prisma.historyPeminjaman.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryPeminjamanFindManyArgs>(args?: SelectSubset<T, HistoryPeminjamanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoryPeminjaman.
     * @param {HistoryPeminjamanCreateArgs} args - Arguments to create a HistoryPeminjaman.
     * @example
     * // Create one HistoryPeminjaman
     * const HistoryPeminjaman = await prisma.historyPeminjaman.create({
     *   data: {
     *     // ... data to create a HistoryPeminjaman
     *   }
     * })
     * 
     */
    create<T extends HistoryPeminjamanCreateArgs>(args: SelectSubset<T, HistoryPeminjamanCreateArgs<ExtArgs>>): Prisma__HistoryPeminjamanClient<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoryPeminjamen.
     * @param {HistoryPeminjamanCreateManyArgs} args - Arguments to create many HistoryPeminjamen.
     * @example
     * // Create many HistoryPeminjamen
     * const historyPeminjaman = await prisma.historyPeminjaman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryPeminjamanCreateManyArgs>(args?: SelectSubset<T, HistoryPeminjamanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoryPeminjamen and returns the data saved in the database.
     * @param {HistoryPeminjamanCreateManyAndReturnArgs} args - Arguments to create many HistoryPeminjamen.
     * @example
     * // Create many HistoryPeminjamen
     * const historyPeminjaman = await prisma.historyPeminjaman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoryPeminjamen and only return the `id`
     * const historyPeminjamanWithIdOnly = await prisma.historyPeminjaman.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryPeminjamanCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryPeminjamanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoryPeminjaman.
     * @param {HistoryPeminjamanDeleteArgs} args - Arguments to delete one HistoryPeminjaman.
     * @example
     * // Delete one HistoryPeminjaman
     * const HistoryPeminjaman = await prisma.historyPeminjaman.delete({
     *   where: {
     *     // ... filter to delete one HistoryPeminjaman
     *   }
     * })
     * 
     */
    delete<T extends HistoryPeminjamanDeleteArgs>(args: SelectSubset<T, HistoryPeminjamanDeleteArgs<ExtArgs>>): Prisma__HistoryPeminjamanClient<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoryPeminjaman.
     * @param {HistoryPeminjamanUpdateArgs} args - Arguments to update one HistoryPeminjaman.
     * @example
     * // Update one HistoryPeminjaman
     * const historyPeminjaman = await prisma.historyPeminjaman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryPeminjamanUpdateArgs>(args: SelectSubset<T, HistoryPeminjamanUpdateArgs<ExtArgs>>): Prisma__HistoryPeminjamanClient<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoryPeminjamen.
     * @param {HistoryPeminjamanDeleteManyArgs} args - Arguments to filter HistoryPeminjamen to delete.
     * @example
     * // Delete a few HistoryPeminjamen
     * const { count } = await prisma.historyPeminjaman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryPeminjamanDeleteManyArgs>(args?: SelectSubset<T, HistoryPeminjamanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryPeminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryPeminjamanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoryPeminjamen
     * const historyPeminjaman = await prisma.historyPeminjaman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryPeminjamanUpdateManyArgs>(args: SelectSubset<T, HistoryPeminjamanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryPeminjamen and returns the data updated in the database.
     * @param {HistoryPeminjamanUpdateManyAndReturnArgs} args - Arguments to update many HistoryPeminjamen.
     * @example
     * // Update many HistoryPeminjamen
     * const historyPeminjaman = await prisma.historyPeminjaman.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoryPeminjamen and only return the `id`
     * const historyPeminjamanWithIdOnly = await prisma.historyPeminjaman.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoryPeminjamanUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoryPeminjamanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoryPeminjaman.
     * @param {HistoryPeminjamanUpsertArgs} args - Arguments to update or create a HistoryPeminjaman.
     * @example
     * // Update or create a HistoryPeminjaman
     * const historyPeminjaman = await prisma.historyPeminjaman.upsert({
     *   create: {
     *     // ... data to create a HistoryPeminjaman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoryPeminjaman we want to update
     *   }
     * })
     */
    upsert<T extends HistoryPeminjamanUpsertArgs>(args: SelectSubset<T, HistoryPeminjamanUpsertArgs<ExtArgs>>): Prisma__HistoryPeminjamanClient<$Result.GetResult<Prisma.$HistoryPeminjamanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoryPeminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryPeminjamanCountArgs} args - Arguments to filter HistoryPeminjamen to count.
     * @example
     * // Count the number of HistoryPeminjamen
     * const count = await prisma.historyPeminjaman.count({
     *   where: {
     *     // ... the filter for the HistoryPeminjamen we want to count
     *   }
     * })
    **/
    count<T extends HistoryPeminjamanCountArgs>(
      args?: Subset<T, HistoryPeminjamanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryPeminjamanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoryPeminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryPeminjamanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryPeminjamanAggregateArgs>(args: Subset<T, HistoryPeminjamanAggregateArgs>): Prisma.PrismaPromise<GetHistoryPeminjamanAggregateType<T>>

    /**
     * Group by HistoryPeminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryPeminjamanGroupByArgs} args - Group by arguments.
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
      T extends HistoryPeminjamanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryPeminjamanGroupByArgs['orderBy'] }
        : { orderBy?: HistoryPeminjamanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoryPeminjamanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryPeminjamanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoryPeminjaman model
   */
  readonly fields: HistoryPeminjamanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoryPeminjaman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryPeminjamanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peminjaman<T extends PeminjamanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeminjamanDefaultArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoryPeminjaman model
   */
  interface HistoryPeminjamanFieldRefs {
    readonly id: FieldRef<"HistoryPeminjaman", 'String'>
    readonly peminjamanId: FieldRef<"HistoryPeminjaman", 'String'>
    readonly status: FieldRef<"HistoryPeminjaman", 'String'>
    readonly tanggalStatus: FieldRef<"HistoryPeminjaman", 'DateTime'>
    readonly cretedAt: FieldRef<"HistoryPeminjaman", 'DateTime'>
    readonly deletedAt: FieldRef<"HistoryPeminjaman", 'DateTime'>
    readonly updatedAt: FieldRef<"HistoryPeminjaman", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistoryPeminjaman findUnique
   */
  export type HistoryPeminjamanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which HistoryPeminjaman to fetch.
     */
    where: HistoryPeminjamanWhereUniqueInput
  }

  /**
   * HistoryPeminjaman findUniqueOrThrow
   */
  export type HistoryPeminjamanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which HistoryPeminjaman to fetch.
     */
    where: HistoryPeminjamanWhereUniqueInput
  }

  /**
   * HistoryPeminjaman findFirst
   */
  export type HistoryPeminjamanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which HistoryPeminjaman to fetch.
     */
    where?: HistoryPeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryPeminjamen to fetch.
     */
    orderBy?: HistoryPeminjamanOrderByWithRelationInput | HistoryPeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryPeminjamen.
     */
    cursor?: HistoryPeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryPeminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryPeminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryPeminjamen.
     */
    distinct?: HistoryPeminjamanScalarFieldEnum | HistoryPeminjamanScalarFieldEnum[]
  }

  /**
   * HistoryPeminjaman findFirstOrThrow
   */
  export type HistoryPeminjamanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which HistoryPeminjaman to fetch.
     */
    where?: HistoryPeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryPeminjamen to fetch.
     */
    orderBy?: HistoryPeminjamanOrderByWithRelationInput | HistoryPeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryPeminjamen.
     */
    cursor?: HistoryPeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryPeminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryPeminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryPeminjamen.
     */
    distinct?: HistoryPeminjamanScalarFieldEnum | HistoryPeminjamanScalarFieldEnum[]
  }

  /**
   * HistoryPeminjaman findMany
   */
  export type HistoryPeminjamanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which HistoryPeminjamen to fetch.
     */
    where?: HistoryPeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryPeminjamen to fetch.
     */
    orderBy?: HistoryPeminjamanOrderByWithRelationInput | HistoryPeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoryPeminjamen.
     */
    cursor?: HistoryPeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryPeminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryPeminjamen.
     */
    skip?: number
    distinct?: HistoryPeminjamanScalarFieldEnum | HistoryPeminjamanScalarFieldEnum[]
  }

  /**
   * HistoryPeminjaman create
   */
  export type HistoryPeminjamanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoryPeminjaman.
     */
    data: XOR<HistoryPeminjamanCreateInput, HistoryPeminjamanUncheckedCreateInput>
  }

  /**
   * HistoryPeminjaman createMany
   */
  export type HistoryPeminjamanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoryPeminjamen.
     */
    data: HistoryPeminjamanCreateManyInput | HistoryPeminjamanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoryPeminjaman createManyAndReturn
   */
  export type HistoryPeminjamanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * The data used to create many HistoryPeminjamen.
     */
    data: HistoryPeminjamanCreateManyInput | HistoryPeminjamanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoryPeminjaman update
   */
  export type HistoryPeminjamanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoryPeminjaman.
     */
    data: XOR<HistoryPeminjamanUpdateInput, HistoryPeminjamanUncheckedUpdateInput>
    /**
     * Choose, which HistoryPeminjaman to update.
     */
    where: HistoryPeminjamanWhereUniqueInput
  }

  /**
   * HistoryPeminjaman updateMany
   */
  export type HistoryPeminjamanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoryPeminjamen.
     */
    data: XOR<HistoryPeminjamanUpdateManyMutationInput, HistoryPeminjamanUncheckedUpdateManyInput>
    /**
     * Filter which HistoryPeminjamen to update
     */
    where?: HistoryPeminjamanWhereInput
    /**
     * Limit how many HistoryPeminjamen to update.
     */
    limit?: number
  }

  /**
   * HistoryPeminjaman updateManyAndReturn
   */
  export type HistoryPeminjamanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * The data used to update HistoryPeminjamen.
     */
    data: XOR<HistoryPeminjamanUpdateManyMutationInput, HistoryPeminjamanUncheckedUpdateManyInput>
    /**
     * Filter which HistoryPeminjamen to update
     */
    where?: HistoryPeminjamanWhereInput
    /**
     * Limit how many HistoryPeminjamen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoryPeminjaman upsert
   */
  export type HistoryPeminjamanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoryPeminjaman to update in case it exists.
     */
    where: HistoryPeminjamanWhereUniqueInput
    /**
     * In case the HistoryPeminjaman found by the `where` argument doesn't exist, create a new HistoryPeminjaman with this data.
     */
    create: XOR<HistoryPeminjamanCreateInput, HistoryPeminjamanUncheckedCreateInput>
    /**
     * In case the HistoryPeminjaman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryPeminjamanUpdateInput, HistoryPeminjamanUncheckedUpdateInput>
  }

  /**
   * HistoryPeminjaman delete
   */
  export type HistoryPeminjamanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanInclude<ExtArgs> | null
    /**
     * Filter which HistoryPeminjaman to delete.
     */
    where: HistoryPeminjamanWhereUniqueInput
  }

  /**
   * HistoryPeminjaman deleteMany
   */
  export type HistoryPeminjamanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryPeminjamen to delete
     */
    where?: HistoryPeminjamanWhereInput
    /**
     * Limit how many HistoryPeminjamen to delete.
     */
    limit?: number
  }

  /**
   * HistoryPeminjaman without action
   */
  export type HistoryPeminjamanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryPeminjaman
     */
    select?: HistoryPeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryPeminjaman
     */
    omit?: HistoryPeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryPeminjamanInclude<ExtArgs> | null
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


  export const MahasiswaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    isActive: 'isActive',
    jurusan: 'jurusan',
    nim: 'nim',
    cretedAt: 'cretedAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const BukuScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    penerbit: 'penerbit',
    tahunTerbit: 'tahunTerbit',
    penulis: 'penulis',
    rakId: 'rakId',
    stok: 'stok',
    cretedAt: 'cretedAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type BukuScalarFieldEnum = (typeof BukuScalarFieldEnum)[keyof typeof BukuScalarFieldEnum]


  export const RakScalarFieldEnum: {
    id: 'id',
    namaRak: 'namaRak',
    lokasi: 'lokasi',
    cretedAt: 'cretedAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type RakScalarFieldEnum = (typeof RakScalarFieldEnum)[keyof typeof RakScalarFieldEnum]


  export const PeminjamanScalarFieldEnum: {
    id: 'id',
    mahasiswaId: 'mahasiswaId',
    tanggalPinjam: 'tanggalPinjam',
    tanggalKembali: 'tanggalKembali',
    cretedAt: 'cretedAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type PeminjamanScalarFieldEnum = (typeof PeminjamanScalarFieldEnum)[keyof typeof PeminjamanScalarFieldEnum]


  export const DetailPeminjamanScalarFieldEnum: {
    id: 'id',
    peminjamanId: 'peminjamanId',
    bukuId: 'bukuId',
    cretedAt: 'cretedAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type DetailPeminjamanScalarFieldEnum = (typeof DetailPeminjamanScalarFieldEnum)[keyof typeof DetailPeminjamanScalarFieldEnum]


  export const HistoryPeminjamanScalarFieldEnum: {
    id: 'id',
    peminjamanId: 'peminjamanId',
    status: 'status',
    tanggalStatus: 'tanggalStatus',
    cretedAt: 'cretedAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type HistoryPeminjamanScalarFieldEnum = (typeof HistoryPeminjamanScalarFieldEnum)[keyof typeof HistoryPeminjamanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  export type MahasiswaWhereInput = {
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    id?: StringFilter<"Mahasiswa"> | string
    nama?: StringFilter<"Mahasiswa"> | string
    isActive?: BoolFilter<"Mahasiswa"> | boolean
    jurusan?: StringFilter<"Mahasiswa"> | string
    nim?: StringFilter<"Mahasiswa"> | string
    cretedAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Mahasiswa"> | Date | string | null
    updatedAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    peminjamans?: PeminjamanListRelationFilter
  }

  export type MahasiswaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    isActive?: SortOrder
    jurusan?: SortOrder
    nim?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    peminjamans?: PeminjamanOrderByRelationAggregateInput
  }

  export type MahasiswaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nim?: string
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    nama?: StringFilter<"Mahasiswa"> | string
    isActive?: BoolFilter<"Mahasiswa"> | boolean
    jurusan?: StringFilter<"Mahasiswa"> | string
    cretedAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Mahasiswa"> | Date | string | null
    updatedAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    peminjamans?: PeminjamanListRelationFilter
  }, "id" | "nim">

  export type MahasiswaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    isActive?: SortOrder
    jurusan?: SortOrder
    nim?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: MahasiswaCountOrderByAggregateInput
    _max?: MahasiswaMaxOrderByAggregateInput
    _min?: MahasiswaMinOrderByAggregateInput
  }

  export type MahasiswaScalarWhereWithAggregatesInput = {
    AND?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    OR?: MahasiswaScalarWhereWithAggregatesInput[]
    NOT?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mahasiswa"> | string
    nama?: StringWithAggregatesFilter<"Mahasiswa"> | string
    isActive?: BoolWithAggregatesFilter<"Mahasiswa"> | boolean
    jurusan?: StringWithAggregatesFilter<"Mahasiswa"> | string
    nim?: StringWithAggregatesFilter<"Mahasiswa"> | string
    cretedAt?: DateTimeWithAggregatesFilter<"Mahasiswa"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Mahasiswa"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Mahasiswa"> | Date | string
  }

  export type BukuWhereInput = {
    AND?: BukuWhereInput | BukuWhereInput[]
    OR?: BukuWhereInput[]
    NOT?: BukuWhereInput | BukuWhereInput[]
    id?: StringFilter<"Buku"> | string
    judul?: StringFilter<"Buku"> | string
    penerbit?: StringNullableFilter<"Buku"> | string | null
    tahunTerbit?: IntNullableFilter<"Buku"> | number | null
    penulis?: StringNullableFilter<"Buku"> | string | null
    rakId?: StringFilter<"Buku"> | string
    stok?: IntFilter<"Buku"> | number
    cretedAt?: DateTimeFilter<"Buku"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Buku"> | Date | string | null
    updatedAt?: DateTimeFilter<"Buku"> | Date | string
    rak?: XOR<RakScalarRelationFilter, RakWhereInput>
    details?: DetailPeminjamanListRelationFilter
  }

  export type BukuOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    penerbit?: SortOrderInput | SortOrder
    tahunTerbit?: SortOrderInput | SortOrder
    penulis?: SortOrderInput | SortOrder
    rakId?: SortOrder
    stok?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    rak?: RakOrderByWithRelationInput
    details?: DetailPeminjamanOrderByRelationAggregateInput
  }

  export type BukuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BukuWhereInput | BukuWhereInput[]
    OR?: BukuWhereInput[]
    NOT?: BukuWhereInput | BukuWhereInput[]
    judul?: StringFilter<"Buku"> | string
    penerbit?: StringNullableFilter<"Buku"> | string | null
    tahunTerbit?: IntNullableFilter<"Buku"> | number | null
    penulis?: StringNullableFilter<"Buku"> | string | null
    rakId?: StringFilter<"Buku"> | string
    stok?: IntFilter<"Buku"> | number
    cretedAt?: DateTimeFilter<"Buku"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Buku"> | Date | string | null
    updatedAt?: DateTimeFilter<"Buku"> | Date | string
    rak?: XOR<RakScalarRelationFilter, RakWhereInput>
    details?: DetailPeminjamanListRelationFilter
  }, "id">

  export type BukuOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    penerbit?: SortOrderInput | SortOrder
    tahunTerbit?: SortOrderInput | SortOrder
    penulis?: SortOrderInput | SortOrder
    rakId?: SortOrder
    stok?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: BukuCountOrderByAggregateInput
    _avg?: BukuAvgOrderByAggregateInput
    _max?: BukuMaxOrderByAggregateInput
    _min?: BukuMinOrderByAggregateInput
    _sum?: BukuSumOrderByAggregateInput
  }

  export type BukuScalarWhereWithAggregatesInput = {
    AND?: BukuScalarWhereWithAggregatesInput | BukuScalarWhereWithAggregatesInput[]
    OR?: BukuScalarWhereWithAggregatesInput[]
    NOT?: BukuScalarWhereWithAggregatesInput | BukuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Buku"> | string
    judul?: StringWithAggregatesFilter<"Buku"> | string
    penerbit?: StringNullableWithAggregatesFilter<"Buku"> | string | null
    tahunTerbit?: IntNullableWithAggregatesFilter<"Buku"> | number | null
    penulis?: StringNullableWithAggregatesFilter<"Buku"> | string | null
    rakId?: StringWithAggregatesFilter<"Buku"> | string
    stok?: IntWithAggregatesFilter<"Buku"> | number
    cretedAt?: DateTimeWithAggregatesFilter<"Buku"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Buku"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Buku"> | Date | string
  }

  export type RakWhereInput = {
    AND?: RakWhereInput | RakWhereInput[]
    OR?: RakWhereInput[]
    NOT?: RakWhereInput | RakWhereInput[]
    id?: StringFilter<"Rak"> | string
    namaRak?: StringFilter<"Rak"> | string
    lokasi?: StringFilter<"Rak"> | string
    cretedAt?: DateTimeFilter<"Rak"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Rak"> | Date | string | null
    updatedAt?: DateTimeFilter<"Rak"> | Date | string
    bukuList?: BukuListRelationFilter
  }

  export type RakOrderByWithRelationInput = {
    id?: SortOrder
    namaRak?: SortOrder
    lokasi?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    bukuList?: BukuOrderByRelationAggregateInput
  }

  export type RakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RakWhereInput | RakWhereInput[]
    OR?: RakWhereInput[]
    NOT?: RakWhereInput | RakWhereInput[]
    namaRak?: StringFilter<"Rak"> | string
    lokasi?: StringFilter<"Rak"> | string
    cretedAt?: DateTimeFilter<"Rak"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Rak"> | Date | string | null
    updatedAt?: DateTimeFilter<"Rak"> | Date | string
    bukuList?: BukuListRelationFilter
  }, "id">

  export type RakOrderByWithAggregationInput = {
    id?: SortOrder
    namaRak?: SortOrder
    lokasi?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: RakCountOrderByAggregateInput
    _max?: RakMaxOrderByAggregateInput
    _min?: RakMinOrderByAggregateInput
  }

  export type RakScalarWhereWithAggregatesInput = {
    AND?: RakScalarWhereWithAggregatesInput | RakScalarWhereWithAggregatesInput[]
    OR?: RakScalarWhereWithAggregatesInput[]
    NOT?: RakScalarWhereWithAggregatesInput | RakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rak"> | string
    namaRak?: StringWithAggregatesFilter<"Rak"> | string
    lokasi?: StringWithAggregatesFilter<"Rak"> | string
    cretedAt?: DateTimeWithAggregatesFilter<"Rak"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Rak"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Rak"> | Date | string
  }

  export type PeminjamanWhereInput = {
    AND?: PeminjamanWhereInput | PeminjamanWhereInput[]
    OR?: PeminjamanWhereInput[]
    NOT?: PeminjamanWhereInput | PeminjamanWhereInput[]
    id?: StringFilter<"Peminjaman"> | string
    mahasiswaId?: StringFilter<"Peminjaman"> | string
    tanggalPinjam?: DateTimeFilter<"Peminjaman"> | Date | string
    tanggalKembali?: DateTimeNullableFilter<"Peminjaman"> | Date | string | null
    cretedAt?: DateTimeFilter<"Peminjaman"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Peminjaman"> | Date | string | null
    updatedAt?: DateTimeFilter<"Peminjaman"> | Date | string
    details?: DetailPeminjamanListRelationFilter
    histories?: HistoryPeminjamanListRelationFilter
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
  }

  export type PeminjamanOrderByWithRelationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    tanggalPinjam?: SortOrder
    tanggalKembali?: SortOrderInput | SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    details?: DetailPeminjamanOrderByRelationAggregateInput
    histories?: HistoryPeminjamanOrderByRelationAggregateInput
    mahasiswa?: MahasiswaOrderByWithRelationInput
  }

  export type PeminjamanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PeminjamanWhereInput | PeminjamanWhereInput[]
    OR?: PeminjamanWhereInput[]
    NOT?: PeminjamanWhereInput | PeminjamanWhereInput[]
    mahasiswaId?: StringFilter<"Peminjaman"> | string
    tanggalPinjam?: DateTimeFilter<"Peminjaman"> | Date | string
    tanggalKembali?: DateTimeNullableFilter<"Peminjaman"> | Date | string | null
    cretedAt?: DateTimeFilter<"Peminjaman"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Peminjaman"> | Date | string | null
    updatedAt?: DateTimeFilter<"Peminjaman"> | Date | string
    details?: DetailPeminjamanListRelationFilter
    histories?: HistoryPeminjamanListRelationFilter
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
  }, "id">

  export type PeminjamanOrderByWithAggregationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    tanggalPinjam?: SortOrder
    tanggalKembali?: SortOrderInput | SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: PeminjamanCountOrderByAggregateInput
    _max?: PeminjamanMaxOrderByAggregateInput
    _min?: PeminjamanMinOrderByAggregateInput
  }

  export type PeminjamanScalarWhereWithAggregatesInput = {
    AND?: PeminjamanScalarWhereWithAggregatesInput | PeminjamanScalarWhereWithAggregatesInput[]
    OR?: PeminjamanScalarWhereWithAggregatesInput[]
    NOT?: PeminjamanScalarWhereWithAggregatesInput | PeminjamanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Peminjaman"> | string
    mahasiswaId?: StringWithAggregatesFilter<"Peminjaman"> | string
    tanggalPinjam?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
    tanggalKembali?: DateTimeNullableWithAggregatesFilter<"Peminjaman"> | Date | string | null
    cretedAt?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Peminjaman"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
  }

  export type DetailPeminjamanWhereInput = {
    AND?: DetailPeminjamanWhereInput | DetailPeminjamanWhereInput[]
    OR?: DetailPeminjamanWhereInput[]
    NOT?: DetailPeminjamanWhereInput | DetailPeminjamanWhereInput[]
    id?: StringFilter<"DetailPeminjaman"> | string
    peminjamanId?: StringFilter<"DetailPeminjaman"> | string
    bukuId?: StringFilter<"DetailPeminjaman"> | string
    cretedAt?: DateTimeFilter<"DetailPeminjaman"> | Date | string
    deletedAt?: DateTimeNullableFilter<"DetailPeminjaman"> | Date | string | null
    updatedAt?: DateTimeFilter<"DetailPeminjaman"> | Date | string
    buku?: XOR<BukuScalarRelationFilter, BukuWhereInput>
    peminjaman?: XOR<PeminjamanScalarRelationFilter, PeminjamanWhereInput>
  }

  export type DetailPeminjamanOrderByWithRelationInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    bukuId?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    buku?: BukuOrderByWithRelationInput
    peminjaman?: PeminjamanOrderByWithRelationInput
  }

  export type DetailPeminjamanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DetailPeminjamanWhereInput | DetailPeminjamanWhereInput[]
    OR?: DetailPeminjamanWhereInput[]
    NOT?: DetailPeminjamanWhereInput | DetailPeminjamanWhereInput[]
    peminjamanId?: StringFilter<"DetailPeminjaman"> | string
    bukuId?: StringFilter<"DetailPeminjaman"> | string
    cretedAt?: DateTimeFilter<"DetailPeminjaman"> | Date | string
    deletedAt?: DateTimeNullableFilter<"DetailPeminjaman"> | Date | string | null
    updatedAt?: DateTimeFilter<"DetailPeminjaman"> | Date | string
    buku?: XOR<BukuScalarRelationFilter, BukuWhereInput>
    peminjaman?: XOR<PeminjamanScalarRelationFilter, PeminjamanWhereInput>
  }, "id">

  export type DetailPeminjamanOrderByWithAggregationInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    bukuId?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: DetailPeminjamanCountOrderByAggregateInput
    _max?: DetailPeminjamanMaxOrderByAggregateInput
    _min?: DetailPeminjamanMinOrderByAggregateInput
  }

  export type DetailPeminjamanScalarWhereWithAggregatesInput = {
    AND?: DetailPeminjamanScalarWhereWithAggregatesInput | DetailPeminjamanScalarWhereWithAggregatesInput[]
    OR?: DetailPeminjamanScalarWhereWithAggregatesInput[]
    NOT?: DetailPeminjamanScalarWhereWithAggregatesInput | DetailPeminjamanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DetailPeminjaman"> | string
    peminjamanId?: StringWithAggregatesFilter<"DetailPeminjaman"> | string
    bukuId?: StringWithAggregatesFilter<"DetailPeminjaman"> | string
    cretedAt?: DateTimeWithAggregatesFilter<"DetailPeminjaman"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"DetailPeminjaman"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"DetailPeminjaman"> | Date | string
  }

  export type HistoryPeminjamanWhereInput = {
    AND?: HistoryPeminjamanWhereInput | HistoryPeminjamanWhereInput[]
    OR?: HistoryPeminjamanWhereInput[]
    NOT?: HistoryPeminjamanWhereInput | HistoryPeminjamanWhereInput[]
    id?: StringFilter<"HistoryPeminjaman"> | string
    peminjamanId?: StringFilter<"HistoryPeminjaman"> | string
    status?: StringFilter<"HistoryPeminjaman"> | string
    tanggalStatus?: DateTimeFilter<"HistoryPeminjaman"> | Date | string
    cretedAt?: DateTimeFilter<"HistoryPeminjaman"> | Date | string
    deletedAt?: DateTimeNullableFilter<"HistoryPeminjaman"> | Date | string | null
    updatedAt?: DateTimeFilter<"HistoryPeminjaman"> | Date | string
    peminjaman?: XOR<PeminjamanScalarRelationFilter, PeminjamanWhereInput>
  }

  export type HistoryPeminjamanOrderByWithRelationInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    status?: SortOrder
    tanggalStatus?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    peminjaman?: PeminjamanOrderByWithRelationInput
  }

  export type HistoryPeminjamanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryPeminjamanWhereInput | HistoryPeminjamanWhereInput[]
    OR?: HistoryPeminjamanWhereInput[]
    NOT?: HistoryPeminjamanWhereInput | HistoryPeminjamanWhereInput[]
    peminjamanId?: StringFilter<"HistoryPeminjaman"> | string
    status?: StringFilter<"HistoryPeminjaman"> | string
    tanggalStatus?: DateTimeFilter<"HistoryPeminjaman"> | Date | string
    cretedAt?: DateTimeFilter<"HistoryPeminjaman"> | Date | string
    deletedAt?: DateTimeNullableFilter<"HistoryPeminjaman"> | Date | string | null
    updatedAt?: DateTimeFilter<"HistoryPeminjaman"> | Date | string
    peminjaman?: XOR<PeminjamanScalarRelationFilter, PeminjamanWhereInput>
  }, "id">

  export type HistoryPeminjamanOrderByWithAggregationInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    status?: SortOrder
    tanggalStatus?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: HistoryPeminjamanCountOrderByAggregateInput
    _max?: HistoryPeminjamanMaxOrderByAggregateInput
    _min?: HistoryPeminjamanMinOrderByAggregateInput
  }

  export type HistoryPeminjamanScalarWhereWithAggregatesInput = {
    AND?: HistoryPeminjamanScalarWhereWithAggregatesInput | HistoryPeminjamanScalarWhereWithAggregatesInput[]
    OR?: HistoryPeminjamanScalarWhereWithAggregatesInput[]
    NOT?: HistoryPeminjamanScalarWhereWithAggregatesInput | HistoryPeminjamanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoryPeminjaman"> | string
    peminjamanId?: StringWithAggregatesFilter<"HistoryPeminjaman"> | string
    status?: StringWithAggregatesFilter<"HistoryPeminjaman"> | string
    tanggalStatus?: DateTimeWithAggregatesFilter<"HistoryPeminjaman"> | Date | string
    cretedAt?: DateTimeWithAggregatesFilter<"HistoryPeminjaman"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"HistoryPeminjaman"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"HistoryPeminjaman"> | Date | string
  }

  export type MahasiswaCreateInput = {
    id?: string
    nama: string
    isActive?: boolean
    jurusan: string
    nim: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    peminjamans?: PeminjamanCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateInput = {
    id?: string
    nama: string
    isActive?: boolean
    jurusan: string
    nim: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    peminjamans?: PeminjamanUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    jurusan?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjamans?: PeminjamanUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    jurusan?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjamans?: PeminjamanUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaCreateManyInput = {
    id?: string
    nama: string
    isActive?: boolean
    jurusan: string
    nim: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type MahasiswaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    jurusan?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    jurusan?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuCreateInput = {
    id?: string
    judul: string
    penerbit?: string | null
    tahunTerbit?: number | null
    penulis?: string | null
    stok: number
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    rak: RakCreateNestedOneWithoutBukuListInput
    details?: DetailPeminjamanCreateNestedManyWithoutBukuInput
  }

  export type BukuUncheckedCreateInput = {
    id?: string
    judul: string
    penerbit?: string | null
    tahunTerbit?: number | null
    penulis?: string | null
    rakId: string
    stok: number
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    details?: DetailPeminjamanUncheckedCreateNestedManyWithoutBukuInput
  }

  export type BukuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    penerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tahunTerbit?: NullableIntFieldUpdateOperationsInput | number | null
    penulis?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: IntFieldUpdateOperationsInput | number
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rak?: RakUpdateOneRequiredWithoutBukuListNestedInput
    details?: DetailPeminjamanUpdateManyWithoutBukuNestedInput
  }

  export type BukuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    penerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tahunTerbit?: NullableIntFieldUpdateOperationsInput | number | null
    penulis?: NullableStringFieldUpdateOperationsInput | string | null
    rakId?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPeminjamanUncheckedUpdateManyWithoutBukuNestedInput
  }

  export type BukuCreateManyInput = {
    id?: string
    judul: string
    penerbit?: string | null
    tahunTerbit?: number | null
    penulis?: string | null
    rakId: string
    stok: number
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type BukuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    penerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tahunTerbit?: NullableIntFieldUpdateOperationsInput | number | null
    penulis?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: IntFieldUpdateOperationsInput | number
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    penerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tahunTerbit?: NullableIntFieldUpdateOperationsInput | number | null
    penulis?: NullableStringFieldUpdateOperationsInput | string | null
    rakId?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RakCreateInput = {
    id?: string
    namaRak: string
    lokasi: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    bukuList?: BukuCreateNestedManyWithoutRakInput
  }

  export type RakUncheckedCreateInput = {
    id?: string
    namaRak: string
    lokasi: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    bukuList?: BukuUncheckedCreateNestedManyWithoutRakInput
  }

  export type RakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaRak?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bukuList?: BukuUpdateManyWithoutRakNestedInput
  }

  export type RakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaRak?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bukuList?: BukuUncheckedUpdateManyWithoutRakNestedInput
  }

  export type RakCreateManyInput = {
    id?: string
    namaRak: string
    lokasi: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type RakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaRak?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaRak?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanCreateInput = {
    id?: string
    tanggalPinjam: Date | string
    tanggalKembali?: Date | string | null
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    details?: DetailPeminjamanCreateNestedManyWithoutPeminjamanInput
    histories?: HistoryPeminjamanCreateNestedManyWithoutPeminjamanInput
    mahasiswa: MahasiswaCreateNestedOneWithoutPeminjamansInput
  }

  export type PeminjamanUncheckedCreateInput = {
    id?: string
    mahasiswaId: string
    tanggalPinjam: Date | string
    tanggalKembali?: Date | string | null
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    details?: DetailPeminjamanUncheckedCreateNestedManyWithoutPeminjamanInput
    histories?: HistoryPeminjamanUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type PeminjamanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPeminjamanUpdateManyWithoutPeminjamanNestedInput
    histories?: HistoryPeminjamanUpdateManyWithoutPeminjamanNestedInput
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutPeminjamansNestedInput
  }

  export type PeminjamanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPeminjamanUncheckedUpdateManyWithoutPeminjamanNestedInput
    histories?: HistoryPeminjamanUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type PeminjamanCreateManyInput = {
    id?: string
    mahasiswaId: string
    tanggalPinjam: Date | string
    tanggalKembali?: Date | string | null
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type PeminjamanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPeminjamanCreateInput = {
    id?: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    buku: BukuCreateNestedOneWithoutDetailsInput
    peminjaman: PeminjamanCreateNestedOneWithoutDetailsInput
  }

  export type DetailPeminjamanUncheckedCreateInput = {
    id?: string
    peminjamanId: string
    bukuId: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type DetailPeminjamanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buku?: BukuUpdateOneRequiredWithoutDetailsNestedInput
    peminjaman?: PeminjamanUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type DetailPeminjamanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    peminjamanId?: StringFieldUpdateOperationsInput | string
    bukuId?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPeminjamanCreateManyInput = {
    id?: string
    peminjamanId: string
    bukuId: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type DetailPeminjamanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPeminjamanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    peminjamanId?: StringFieldUpdateOperationsInput | string
    bukuId?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryPeminjamanCreateInput = {
    id?: string
    status: string
    tanggalStatus: Date | string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    peminjaman: PeminjamanCreateNestedOneWithoutHistoriesInput
  }

  export type HistoryPeminjamanUncheckedCreateInput = {
    id?: string
    peminjamanId: string
    status: string
    tanggalStatus: Date | string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type HistoryPeminjamanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tanggalStatus?: DateTimeFieldUpdateOperationsInput | Date | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjaman?: PeminjamanUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type HistoryPeminjamanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    peminjamanId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tanggalStatus?: DateTimeFieldUpdateOperationsInput | Date | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryPeminjamanCreateManyInput = {
    id?: string
    peminjamanId: string
    status: string
    tanggalStatus: Date | string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type HistoryPeminjamanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tanggalStatus?: DateTimeFieldUpdateOperationsInput | Date | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryPeminjamanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    peminjamanId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tanggalStatus?: DateTimeFieldUpdateOperationsInput | Date | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PeminjamanListRelationFilter = {
    every?: PeminjamanWhereInput
    some?: PeminjamanWhereInput
    none?: PeminjamanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PeminjamanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MahasiswaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    isActive?: SortOrder
    jurusan?: SortOrder
    nim?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    isActive?: SortOrder
    jurusan?: SortOrder
    nim?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    isActive?: SortOrder
    jurusan?: SortOrder
    nim?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type RakScalarRelationFilter = {
    is?: RakWhereInput
    isNot?: RakWhereInput
  }

  export type DetailPeminjamanListRelationFilter = {
    every?: DetailPeminjamanWhereInput
    some?: DetailPeminjamanWhereInput
    none?: DetailPeminjamanWhereInput
  }

  export type DetailPeminjamanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BukuCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    penerbit?: SortOrder
    tahunTerbit?: SortOrder
    penulis?: SortOrder
    rakId?: SortOrder
    stok?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuAvgOrderByAggregateInput = {
    tahunTerbit?: SortOrder
    stok?: SortOrder
  }

  export type BukuMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    penerbit?: SortOrder
    tahunTerbit?: SortOrder
    penulis?: SortOrder
    rakId?: SortOrder
    stok?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    penerbit?: SortOrder
    tahunTerbit?: SortOrder
    penulis?: SortOrder
    rakId?: SortOrder
    stok?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuSumOrderByAggregateInput = {
    tahunTerbit?: SortOrder
    stok?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type BukuListRelationFilter = {
    every?: BukuWhereInput
    some?: BukuWhereInput
    none?: BukuWhereInput
  }

  export type BukuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RakCountOrderByAggregateInput = {
    id?: SortOrder
    namaRak?: SortOrder
    lokasi?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RakMaxOrderByAggregateInput = {
    id?: SortOrder
    namaRak?: SortOrder
    lokasi?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RakMinOrderByAggregateInput = {
    id?: SortOrder
    namaRak?: SortOrder
    lokasi?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoryPeminjamanListRelationFilter = {
    every?: HistoryPeminjamanWhereInput
    some?: HistoryPeminjamanWhereInput
    none?: HistoryPeminjamanWhereInput
  }

  export type MahasiswaScalarRelationFilter = {
    is?: MahasiswaWhereInput
    isNot?: MahasiswaWhereInput
  }

  export type HistoryPeminjamanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeminjamanCountOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    tanggalPinjam?: SortOrder
    tanggalKembali?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeminjamanMaxOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    tanggalPinjam?: SortOrder
    tanggalKembali?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeminjamanMinOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    tanggalPinjam?: SortOrder
    tanggalKembali?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuScalarRelationFilter = {
    is?: BukuWhereInput
    isNot?: BukuWhereInput
  }

  export type PeminjamanScalarRelationFilter = {
    is?: PeminjamanWhereInput
    isNot?: PeminjamanWhereInput
  }

  export type DetailPeminjamanCountOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    bukuId?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetailPeminjamanMaxOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    bukuId?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetailPeminjamanMinOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    bukuId?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoryPeminjamanCountOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    status?: SortOrder
    tanggalStatus?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoryPeminjamanMaxOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    status?: SortOrder
    tanggalStatus?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoryPeminjamanMinOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    status?: SortOrder
    tanggalStatus?: SortOrder
    cretedAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeminjamanCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<PeminjamanCreateWithoutMahasiswaInput, PeminjamanUncheckedCreateWithoutMahasiswaInput> | PeminjamanCreateWithoutMahasiswaInput[] | PeminjamanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutMahasiswaInput | PeminjamanCreateOrConnectWithoutMahasiswaInput[]
    createMany?: PeminjamanCreateManyMahasiswaInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type PeminjamanUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<PeminjamanCreateWithoutMahasiswaInput, PeminjamanUncheckedCreateWithoutMahasiswaInput> | PeminjamanCreateWithoutMahasiswaInput[] | PeminjamanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutMahasiswaInput | PeminjamanCreateOrConnectWithoutMahasiswaInput[]
    createMany?: PeminjamanCreateManyMahasiswaInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PeminjamanUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<PeminjamanCreateWithoutMahasiswaInput, PeminjamanUncheckedCreateWithoutMahasiswaInput> | PeminjamanCreateWithoutMahasiswaInput[] | PeminjamanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutMahasiswaInput | PeminjamanCreateOrConnectWithoutMahasiswaInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutMahasiswaInput | PeminjamanUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: PeminjamanCreateManyMahasiswaInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutMahasiswaInput | PeminjamanUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutMahasiswaInput | PeminjamanUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type PeminjamanUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<PeminjamanCreateWithoutMahasiswaInput, PeminjamanUncheckedCreateWithoutMahasiswaInput> | PeminjamanCreateWithoutMahasiswaInput[] | PeminjamanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutMahasiswaInput | PeminjamanCreateOrConnectWithoutMahasiswaInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutMahasiswaInput | PeminjamanUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: PeminjamanCreateManyMahasiswaInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutMahasiswaInput | PeminjamanUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutMahasiswaInput | PeminjamanUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type RakCreateNestedOneWithoutBukuListInput = {
    create?: XOR<RakCreateWithoutBukuListInput, RakUncheckedCreateWithoutBukuListInput>
    connectOrCreate?: RakCreateOrConnectWithoutBukuListInput
    connect?: RakWhereUniqueInput
  }

  export type DetailPeminjamanCreateNestedManyWithoutBukuInput = {
    create?: XOR<DetailPeminjamanCreateWithoutBukuInput, DetailPeminjamanUncheckedCreateWithoutBukuInput> | DetailPeminjamanCreateWithoutBukuInput[] | DetailPeminjamanUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: DetailPeminjamanCreateOrConnectWithoutBukuInput | DetailPeminjamanCreateOrConnectWithoutBukuInput[]
    createMany?: DetailPeminjamanCreateManyBukuInputEnvelope
    connect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
  }

  export type DetailPeminjamanUncheckedCreateNestedManyWithoutBukuInput = {
    create?: XOR<DetailPeminjamanCreateWithoutBukuInput, DetailPeminjamanUncheckedCreateWithoutBukuInput> | DetailPeminjamanCreateWithoutBukuInput[] | DetailPeminjamanUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: DetailPeminjamanCreateOrConnectWithoutBukuInput | DetailPeminjamanCreateOrConnectWithoutBukuInput[]
    createMany?: DetailPeminjamanCreateManyBukuInputEnvelope
    connect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RakUpdateOneRequiredWithoutBukuListNestedInput = {
    create?: XOR<RakCreateWithoutBukuListInput, RakUncheckedCreateWithoutBukuListInput>
    connectOrCreate?: RakCreateOrConnectWithoutBukuListInput
    upsert?: RakUpsertWithoutBukuListInput
    connect?: RakWhereUniqueInput
    update?: XOR<XOR<RakUpdateToOneWithWhereWithoutBukuListInput, RakUpdateWithoutBukuListInput>, RakUncheckedUpdateWithoutBukuListInput>
  }

  export type DetailPeminjamanUpdateManyWithoutBukuNestedInput = {
    create?: XOR<DetailPeminjamanCreateWithoutBukuInput, DetailPeminjamanUncheckedCreateWithoutBukuInput> | DetailPeminjamanCreateWithoutBukuInput[] | DetailPeminjamanUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: DetailPeminjamanCreateOrConnectWithoutBukuInput | DetailPeminjamanCreateOrConnectWithoutBukuInput[]
    upsert?: DetailPeminjamanUpsertWithWhereUniqueWithoutBukuInput | DetailPeminjamanUpsertWithWhereUniqueWithoutBukuInput[]
    createMany?: DetailPeminjamanCreateManyBukuInputEnvelope
    set?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    disconnect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    delete?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    connect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    update?: DetailPeminjamanUpdateWithWhereUniqueWithoutBukuInput | DetailPeminjamanUpdateWithWhereUniqueWithoutBukuInput[]
    updateMany?: DetailPeminjamanUpdateManyWithWhereWithoutBukuInput | DetailPeminjamanUpdateManyWithWhereWithoutBukuInput[]
    deleteMany?: DetailPeminjamanScalarWhereInput | DetailPeminjamanScalarWhereInput[]
  }

  export type DetailPeminjamanUncheckedUpdateManyWithoutBukuNestedInput = {
    create?: XOR<DetailPeminjamanCreateWithoutBukuInput, DetailPeminjamanUncheckedCreateWithoutBukuInput> | DetailPeminjamanCreateWithoutBukuInput[] | DetailPeminjamanUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: DetailPeminjamanCreateOrConnectWithoutBukuInput | DetailPeminjamanCreateOrConnectWithoutBukuInput[]
    upsert?: DetailPeminjamanUpsertWithWhereUniqueWithoutBukuInput | DetailPeminjamanUpsertWithWhereUniqueWithoutBukuInput[]
    createMany?: DetailPeminjamanCreateManyBukuInputEnvelope
    set?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    disconnect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    delete?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    connect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    update?: DetailPeminjamanUpdateWithWhereUniqueWithoutBukuInput | DetailPeminjamanUpdateWithWhereUniqueWithoutBukuInput[]
    updateMany?: DetailPeminjamanUpdateManyWithWhereWithoutBukuInput | DetailPeminjamanUpdateManyWithWhereWithoutBukuInput[]
    deleteMany?: DetailPeminjamanScalarWhereInput | DetailPeminjamanScalarWhereInput[]
  }

  export type BukuCreateNestedManyWithoutRakInput = {
    create?: XOR<BukuCreateWithoutRakInput, BukuUncheckedCreateWithoutRakInput> | BukuCreateWithoutRakInput[] | BukuUncheckedCreateWithoutRakInput[]
    connectOrCreate?: BukuCreateOrConnectWithoutRakInput | BukuCreateOrConnectWithoutRakInput[]
    createMany?: BukuCreateManyRakInputEnvelope
    connect?: BukuWhereUniqueInput | BukuWhereUniqueInput[]
  }

  export type BukuUncheckedCreateNestedManyWithoutRakInput = {
    create?: XOR<BukuCreateWithoutRakInput, BukuUncheckedCreateWithoutRakInput> | BukuCreateWithoutRakInput[] | BukuUncheckedCreateWithoutRakInput[]
    connectOrCreate?: BukuCreateOrConnectWithoutRakInput | BukuCreateOrConnectWithoutRakInput[]
    createMany?: BukuCreateManyRakInputEnvelope
    connect?: BukuWhereUniqueInput | BukuWhereUniqueInput[]
  }

  export type BukuUpdateManyWithoutRakNestedInput = {
    create?: XOR<BukuCreateWithoutRakInput, BukuUncheckedCreateWithoutRakInput> | BukuCreateWithoutRakInput[] | BukuUncheckedCreateWithoutRakInput[]
    connectOrCreate?: BukuCreateOrConnectWithoutRakInput | BukuCreateOrConnectWithoutRakInput[]
    upsert?: BukuUpsertWithWhereUniqueWithoutRakInput | BukuUpsertWithWhereUniqueWithoutRakInput[]
    createMany?: BukuCreateManyRakInputEnvelope
    set?: BukuWhereUniqueInput | BukuWhereUniqueInput[]
    disconnect?: BukuWhereUniqueInput | BukuWhereUniqueInput[]
    delete?: BukuWhereUniqueInput | BukuWhereUniqueInput[]
    connect?: BukuWhereUniqueInput | BukuWhereUniqueInput[]
    update?: BukuUpdateWithWhereUniqueWithoutRakInput | BukuUpdateWithWhereUniqueWithoutRakInput[]
    updateMany?: BukuUpdateManyWithWhereWithoutRakInput | BukuUpdateManyWithWhereWithoutRakInput[]
    deleteMany?: BukuScalarWhereInput | BukuScalarWhereInput[]
  }

  export type BukuUncheckedUpdateManyWithoutRakNestedInput = {
    create?: XOR<BukuCreateWithoutRakInput, BukuUncheckedCreateWithoutRakInput> | BukuCreateWithoutRakInput[] | BukuUncheckedCreateWithoutRakInput[]
    connectOrCreate?: BukuCreateOrConnectWithoutRakInput | BukuCreateOrConnectWithoutRakInput[]
    upsert?: BukuUpsertWithWhereUniqueWithoutRakInput | BukuUpsertWithWhereUniqueWithoutRakInput[]
    createMany?: BukuCreateManyRakInputEnvelope
    set?: BukuWhereUniqueInput | BukuWhereUniqueInput[]
    disconnect?: BukuWhereUniqueInput | BukuWhereUniqueInput[]
    delete?: BukuWhereUniqueInput | BukuWhereUniqueInput[]
    connect?: BukuWhereUniqueInput | BukuWhereUniqueInput[]
    update?: BukuUpdateWithWhereUniqueWithoutRakInput | BukuUpdateWithWhereUniqueWithoutRakInput[]
    updateMany?: BukuUpdateManyWithWhereWithoutRakInput | BukuUpdateManyWithWhereWithoutRakInput[]
    deleteMany?: BukuScalarWhereInput | BukuScalarWhereInput[]
  }

  export type DetailPeminjamanCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<DetailPeminjamanCreateWithoutPeminjamanInput, DetailPeminjamanUncheckedCreateWithoutPeminjamanInput> | DetailPeminjamanCreateWithoutPeminjamanInput[] | DetailPeminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: DetailPeminjamanCreateOrConnectWithoutPeminjamanInput | DetailPeminjamanCreateOrConnectWithoutPeminjamanInput[]
    createMany?: DetailPeminjamanCreateManyPeminjamanInputEnvelope
    connect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
  }

  export type HistoryPeminjamanCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<HistoryPeminjamanCreateWithoutPeminjamanInput, HistoryPeminjamanUncheckedCreateWithoutPeminjamanInput> | HistoryPeminjamanCreateWithoutPeminjamanInput[] | HistoryPeminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: HistoryPeminjamanCreateOrConnectWithoutPeminjamanInput | HistoryPeminjamanCreateOrConnectWithoutPeminjamanInput[]
    createMany?: HistoryPeminjamanCreateManyPeminjamanInputEnvelope
    connect?: HistoryPeminjamanWhereUniqueInput | HistoryPeminjamanWhereUniqueInput[]
  }

  export type MahasiswaCreateNestedOneWithoutPeminjamansInput = {
    create?: XOR<MahasiswaCreateWithoutPeminjamansInput, MahasiswaUncheckedCreateWithoutPeminjamansInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPeminjamansInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type DetailPeminjamanUncheckedCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<DetailPeminjamanCreateWithoutPeminjamanInput, DetailPeminjamanUncheckedCreateWithoutPeminjamanInput> | DetailPeminjamanCreateWithoutPeminjamanInput[] | DetailPeminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: DetailPeminjamanCreateOrConnectWithoutPeminjamanInput | DetailPeminjamanCreateOrConnectWithoutPeminjamanInput[]
    createMany?: DetailPeminjamanCreateManyPeminjamanInputEnvelope
    connect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
  }

  export type HistoryPeminjamanUncheckedCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<HistoryPeminjamanCreateWithoutPeminjamanInput, HistoryPeminjamanUncheckedCreateWithoutPeminjamanInput> | HistoryPeminjamanCreateWithoutPeminjamanInput[] | HistoryPeminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: HistoryPeminjamanCreateOrConnectWithoutPeminjamanInput | HistoryPeminjamanCreateOrConnectWithoutPeminjamanInput[]
    createMany?: HistoryPeminjamanCreateManyPeminjamanInputEnvelope
    connect?: HistoryPeminjamanWhereUniqueInput | HistoryPeminjamanWhereUniqueInput[]
  }

  export type DetailPeminjamanUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<DetailPeminjamanCreateWithoutPeminjamanInput, DetailPeminjamanUncheckedCreateWithoutPeminjamanInput> | DetailPeminjamanCreateWithoutPeminjamanInput[] | DetailPeminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: DetailPeminjamanCreateOrConnectWithoutPeminjamanInput | DetailPeminjamanCreateOrConnectWithoutPeminjamanInput[]
    upsert?: DetailPeminjamanUpsertWithWhereUniqueWithoutPeminjamanInput | DetailPeminjamanUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: DetailPeminjamanCreateManyPeminjamanInputEnvelope
    set?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    disconnect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    delete?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    connect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    update?: DetailPeminjamanUpdateWithWhereUniqueWithoutPeminjamanInput | DetailPeminjamanUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: DetailPeminjamanUpdateManyWithWhereWithoutPeminjamanInput | DetailPeminjamanUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: DetailPeminjamanScalarWhereInput | DetailPeminjamanScalarWhereInput[]
  }

  export type HistoryPeminjamanUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<HistoryPeminjamanCreateWithoutPeminjamanInput, HistoryPeminjamanUncheckedCreateWithoutPeminjamanInput> | HistoryPeminjamanCreateWithoutPeminjamanInput[] | HistoryPeminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: HistoryPeminjamanCreateOrConnectWithoutPeminjamanInput | HistoryPeminjamanCreateOrConnectWithoutPeminjamanInput[]
    upsert?: HistoryPeminjamanUpsertWithWhereUniqueWithoutPeminjamanInput | HistoryPeminjamanUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: HistoryPeminjamanCreateManyPeminjamanInputEnvelope
    set?: HistoryPeminjamanWhereUniqueInput | HistoryPeminjamanWhereUniqueInput[]
    disconnect?: HistoryPeminjamanWhereUniqueInput | HistoryPeminjamanWhereUniqueInput[]
    delete?: HistoryPeminjamanWhereUniqueInput | HistoryPeminjamanWhereUniqueInput[]
    connect?: HistoryPeminjamanWhereUniqueInput | HistoryPeminjamanWhereUniqueInput[]
    update?: HistoryPeminjamanUpdateWithWhereUniqueWithoutPeminjamanInput | HistoryPeminjamanUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: HistoryPeminjamanUpdateManyWithWhereWithoutPeminjamanInput | HistoryPeminjamanUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: HistoryPeminjamanScalarWhereInput | HistoryPeminjamanScalarWhereInput[]
  }

  export type MahasiswaUpdateOneRequiredWithoutPeminjamansNestedInput = {
    create?: XOR<MahasiswaCreateWithoutPeminjamansInput, MahasiswaUncheckedCreateWithoutPeminjamansInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPeminjamansInput
    upsert?: MahasiswaUpsertWithoutPeminjamansInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutPeminjamansInput, MahasiswaUpdateWithoutPeminjamansInput>, MahasiswaUncheckedUpdateWithoutPeminjamansInput>
  }

  export type DetailPeminjamanUncheckedUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<DetailPeminjamanCreateWithoutPeminjamanInput, DetailPeminjamanUncheckedCreateWithoutPeminjamanInput> | DetailPeminjamanCreateWithoutPeminjamanInput[] | DetailPeminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: DetailPeminjamanCreateOrConnectWithoutPeminjamanInput | DetailPeminjamanCreateOrConnectWithoutPeminjamanInput[]
    upsert?: DetailPeminjamanUpsertWithWhereUniqueWithoutPeminjamanInput | DetailPeminjamanUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: DetailPeminjamanCreateManyPeminjamanInputEnvelope
    set?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    disconnect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    delete?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    connect?: DetailPeminjamanWhereUniqueInput | DetailPeminjamanWhereUniqueInput[]
    update?: DetailPeminjamanUpdateWithWhereUniqueWithoutPeminjamanInput | DetailPeminjamanUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: DetailPeminjamanUpdateManyWithWhereWithoutPeminjamanInput | DetailPeminjamanUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: DetailPeminjamanScalarWhereInput | DetailPeminjamanScalarWhereInput[]
  }

  export type HistoryPeminjamanUncheckedUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<HistoryPeminjamanCreateWithoutPeminjamanInput, HistoryPeminjamanUncheckedCreateWithoutPeminjamanInput> | HistoryPeminjamanCreateWithoutPeminjamanInput[] | HistoryPeminjamanUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: HistoryPeminjamanCreateOrConnectWithoutPeminjamanInput | HistoryPeminjamanCreateOrConnectWithoutPeminjamanInput[]
    upsert?: HistoryPeminjamanUpsertWithWhereUniqueWithoutPeminjamanInput | HistoryPeminjamanUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: HistoryPeminjamanCreateManyPeminjamanInputEnvelope
    set?: HistoryPeminjamanWhereUniqueInput | HistoryPeminjamanWhereUniqueInput[]
    disconnect?: HistoryPeminjamanWhereUniqueInput | HistoryPeminjamanWhereUniqueInput[]
    delete?: HistoryPeminjamanWhereUniqueInput | HistoryPeminjamanWhereUniqueInput[]
    connect?: HistoryPeminjamanWhereUniqueInput | HistoryPeminjamanWhereUniqueInput[]
    update?: HistoryPeminjamanUpdateWithWhereUniqueWithoutPeminjamanInput | HistoryPeminjamanUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: HistoryPeminjamanUpdateManyWithWhereWithoutPeminjamanInput | HistoryPeminjamanUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: HistoryPeminjamanScalarWhereInput | HistoryPeminjamanScalarWhereInput[]
  }

  export type BukuCreateNestedOneWithoutDetailsInput = {
    create?: XOR<BukuCreateWithoutDetailsInput, BukuUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: BukuCreateOrConnectWithoutDetailsInput
    connect?: BukuWhereUniqueInput
  }

  export type PeminjamanCreateNestedOneWithoutDetailsInput = {
    create?: XOR<PeminjamanCreateWithoutDetailsInput, PeminjamanUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: PeminjamanCreateOrConnectWithoutDetailsInput
    connect?: PeminjamanWhereUniqueInput
  }

  export type BukuUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<BukuCreateWithoutDetailsInput, BukuUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: BukuCreateOrConnectWithoutDetailsInput
    upsert?: BukuUpsertWithoutDetailsInput
    connect?: BukuWhereUniqueInput
    update?: XOR<XOR<BukuUpdateToOneWithWhereWithoutDetailsInput, BukuUpdateWithoutDetailsInput>, BukuUncheckedUpdateWithoutDetailsInput>
  }

  export type PeminjamanUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<PeminjamanCreateWithoutDetailsInput, PeminjamanUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: PeminjamanCreateOrConnectWithoutDetailsInput
    upsert?: PeminjamanUpsertWithoutDetailsInput
    connect?: PeminjamanWhereUniqueInput
    update?: XOR<XOR<PeminjamanUpdateToOneWithWhereWithoutDetailsInput, PeminjamanUpdateWithoutDetailsInput>, PeminjamanUncheckedUpdateWithoutDetailsInput>
  }

  export type PeminjamanCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<PeminjamanCreateWithoutHistoriesInput, PeminjamanUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: PeminjamanCreateOrConnectWithoutHistoriesInput
    connect?: PeminjamanWhereUniqueInput
  }

  export type PeminjamanUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<PeminjamanCreateWithoutHistoriesInput, PeminjamanUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: PeminjamanCreateOrConnectWithoutHistoriesInput
    upsert?: PeminjamanUpsertWithoutHistoriesInput
    connect?: PeminjamanWhereUniqueInput
    update?: XOR<XOR<PeminjamanUpdateToOneWithWhereWithoutHistoriesInput, PeminjamanUpdateWithoutHistoriesInput>, PeminjamanUncheckedUpdateWithoutHistoriesInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type PeminjamanCreateWithoutMahasiswaInput = {
    id?: string
    tanggalPinjam: Date | string
    tanggalKembali?: Date | string | null
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    details?: DetailPeminjamanCreateNestedManyWithoutPeminjamanInput
    histories?: HistoryPeminjamanCreateNestedManyWithoutPeminjamanInput
  }

  export type PeminjamanUncheckedCreateWithoutMahasiswaInput = {
    id?: string
    tanggalPinjam: Date | string
    tanggalKembali?: Date | string | null
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    details?: DetailPeminjamanUncheckedCreateNestedManyWithoutPeminjamanInput
    histories?: HistoryPeminjamanUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type PeminjamanCreateOrConnectWithoutMahasiswaInput = {
    where: PeminjamanWhereUniqueInput
    create: XOR<PeminjamanCreateWithoutMahasiswaInput, PeminjamanUncheckedCreateWithoutMahasiswaInput>
  }

  export type PeminjamanCreateManyMahasiswaInputEnvelope = {
    data: PeminjamanCreateManyMahasiswaInput | PeminjamanCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type PeminjamanUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: PeminjamanWhereUniqueInput
    update: XOR<PeminjamanUpdateWithoutMahasiswaInput, PeminjamanUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<PeminjamanCreateWithoutMahasiswaInput, PeminjamanUncheckedCreateWithoutMahasiswaInput>
  }

  export type PeminjamanUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: PeminjamanWhereUniqueInput
    data: XOR<PeminjamanUpdateWithoutMahasiswaInput, PeminjamanUncheckedUpdateWithoutMahasiswaInput>
  }

  export type PeminjamanUpdateManyWithWhereWithoutMahasiswaInput = {
    where: PeminjamanScalarWhereInput
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type PeminjamanScalarWhereInput = {
    AND?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
    OR?: PeminjamanScalarWhereInput[]
    NOT?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
    id?: StringFilter<"Peminjaman"> | string
    mahasiswaId?: StringFilter<"Peminjaman"> | string
    tanggalPinjam?: DateTimeFilter<"Peminjaman"> | Date | string
    tanggalKembali?: DateTimeNullableFilter<"Peminjaman"> | Date | string | null
    cretedAt?: DateTimeFilter<"Peminjaman"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Peminjaman"> | Date | string | null
    updatedAt?: DateTimeFilter<"Peminjaman"> | Date | string
  }

  export type RakCreateWithoutBukuListInput = {
    id?: string
    namaRak: string
    lokasi: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type RakUncheckedCreateWithoutBukuListInput = {
    id?: string
    namaRak: string
    lokasi: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type RakCreateOrConnectWithoutBukuListInput = {
    where: RakWhereUniqueInput
    create: XOR<RakCreateWithoutBukuListInput, RakUncheckedCreateWithoutBukuListInput>
  }

  export type DetailPeminjamanCreateWithoutBukuInput = {
    id?: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    peminjaman: PeminjamanCreateNestedOneWithoutDetailsInput
  }

  export type DetailPeminjamanUncheckedCreateWithoutBukuInput = {
    id?: string
    peminjamanId: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type DetailPeminjamanCreateOrConnectWithoutBukuInput = {
    where: DetailPeminjamanWhereUniqueInput
    create: XOR<DetailPeminjamanCreateWithoutBukuInput, DetailPeminjamanUncheckedCreateWithoutBukuInput>
  }

  export type DetailPeminjamanCreateManyBukuInputEnvelope = {
    data: DetailPeminjamanCreateManyBukuInput | DetailPeminjamanCreateManyBukuInput[]
    skipDuplicates?: boolean
  }

  export type RakUpsertWithoutBukuListInput = {
    update: XOR<RakUpdateWithoutBukuListInput, RakUncheckedUpdateWithoutBukuListInput>
    create: XOR<RakCreateWithoutBukuListInput, RakUncheckedCreateWithoutBukuListInput>
    where?: RakWhereInput
  }

  export type RakUpdateToOneWithWhereWithoutBukuListInput = {
    where?: RakWhereInput
    data: XOR<RakUpdateWithoutBukuListInput, RakUncheckedUpdateWithoutBukuListInput>
  }

  export type RakUpdateWithoutBukuListInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaRak?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RakUncheckedUpdateWithoutBukuListInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaRak?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPeminjamanUpsertWithWhereUniqueWithoutBukuInput = {
    where: DetailPeminjamanWhereUniqueInput
    update: XOR<DetailPeminjamanUpdateWithoutBukuInput, DetailPeminjamanUncheckedUpdateWithoutBukuInput>
    create: XOR<DetailPeminjamanCreateWithoutBukuInput, DetailPeminjamanUncheckedCreateWithoutBukuInput>
  }

  export type DetailPeminjamanUpdateWithWhereUniqueWithoutBukuInput = {
    where: DetailPeminjamanWhereUniqueInput
    data: XOR<DetailPeminjamanUpdateWithoutBukuInput, DetailPeminjamanUncheckedUpdateWithoutBukuInput>
  }

  export type DetailPeminjamanUpdateManyWithWhereWithoutBukuInput = {
    where: DetailPeminjamanScalarWhereInput
    data: XOR<DetailPeminjamanUpdateManyMutationInput, DetailPeminjamanUncheckedUpdateManyWithoutBukuInput>
  }

  export type DetailPeminjamanScalarWhereInput = {
    AND?: DetailPeminjamanScalarWhereInput | DetailPeminjamanScalarWhereInput[]
    OR?: DetailPeminjamanScalarWhereInput[]
    NOT?: DetailPeminjamanScalarWhereInput | DetailPeminjamanScalarWhereInput[]
    id?: StringFilter<"DetailPeminjaman"> | string
    peminjamanId?: StringFilter<"DetailPeminjaman"> | string
    bukuId?: StringFilter<"DetailPeminjaman"> | string
    cretedAt?: DateTimeFilter<"DetailPeminjaman"> | Date | string
    deletedAt?: DateTimeNullableFilter<"DetailPeminjaman"> | Date | string | null
    updatedAt?: DateTimeFilter<"DetailPeminjaman"> | Date | string
  }

  export type BukuCreateWithoutRakInput = {
    id?: string
    judul: string
    penerbit?: string | null
    tahunTerbit?: number | null
    penulis?: string | null
    stok: number
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    details?: DetailPeminjamanCreateNestedManyWithoutBukuInput
  }

  export type BukuUncheckedCreateWithoutRakInput = {
    id?: string
    judul: string
    penerbit?: string | null
    tahunTerbit?: number | null
    penulis?: string | null
    stok: number
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    details?: DetailPeminjamanUncheckedCreateNestedManyWithoutBukuInput
  }

  export type BukuCreateOrConnectWithoutRakInput = {
    where: BukuWhereUniqueInput
    create: XOR<BukuCreateWithoutRakInput, BukuUncheckedCreateWithoutRakInput>
  }

  export type BukuCreateManyRakInputEnvelope = {
    data: BukuCreateManyRakInput | BukuCreateManyRakInput[]
    skipDuplicates?: boolean
  }

  export type BukuUpsertWithWhereUniqueWithoutRakInput = {
    where: BukuWhereUniqueInput
    update: XOR<BukuUpdateWithoutRakInput, BukuUncheckedUpdateWithoutRakInput>
    create: XOR<BukuCreateWithoutRakInput, BukuUncheckedCreateWithoutRakInput>
  }

  export type BukuUpdateWithWhereUniqueWithoutRakInput = {
    where: BukuWhereUniqueInput
    data: XOR<BukuUpdateWithoutRakInput, BukuUncheckedUpdateWithoutRakInput>
  }

  export type BukuUpdateManyWithWhereWithoutRakInput = {
    where: BukuScalarWhereInput
    data: XOR<BukuUpdateManyMutationInput, BukuUncheckedUpdateManyWithoutRakInput>
  }

  export type BukuScalarWhereInput = {
    AND?: BukuScalarWhereInput | BukuScalarWhereInput[]
    OR?: BukuScalarWhereInput[]
    NOT?: BukuScalarWhereInput | BukuScalarWhereInput[]
    id?: StringFilter<"Buku"> | string
    judul?: StringFilter<"Buku"> | string
    penerbit?: StringNullableFilter<"Buku"> | string | null
    tahunTerbit?: IntNullableFilter<"Buku"> | number | null
    penulis?: StringNullableFilter<"Buku"> | string | null
    rakId?: StringFilter<"Buku"> | string
    stok?: IntFilter<"Buku"> | number
    cretedAt?: DateTimeFilter<"Buku"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Buku"> | Date | string | null
    updatedAt?: DateTimeFilter<"Buku"> | Date | string
  }

  export type DetailPeminjamanCreateWithoutPeminjamanInput = {
    id?: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    buku: BukuCreateNestedOneWithoutDetailsInput
  }

  export type DetailPeminjamanUncheckedCreateWithoutPeminjamanInput = {
    id?: string
    bukuId: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type DetailPeminjamanCreateOrConnectWithoutPeminjamanInput = {
    where: DetailPeminjamanWhereUniqueInput
    create: XOR<DetailPeminjamanCreateWithoutPeminjamanInput, DetailPeminjamanUncheckedCreateWithoutPeminjamanInput>
  }

  export type DetailPeminjamanCreateManyPeminjamanInputEnvelope = {
    data: DetailPeminjamanCreateManyPeminjamanInput | DetailPeminjamanCreateManyPeminjamanInput[]
    skipDuplicates?: boolean
  }

  export type HistoryPeminjamanCreateWithoutPeminjamanInput = {
    id?: string
    status: string
    tanggalStatus: Date | string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type HistoryPeminjamanUncheckedCreateWithoutPeminjamanInput = {
    id?: string
    status: string
    tanggalStatus: Date | string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type HistoryPeminjamanCreateOrConnectWithoutPeminjamanInput = {
    where: HistoryPeminjamanWhereUniqueInput
    create: XOR<HistoryPeminjamanCreateWithoutPeminjamanInput, HistoryPeminjamanUncheckedCreateWithoutPeminjamanInput>
  }

  export type HistoryPeminjamanCreateManyPeminjamanInputEnvelope = {
    data: HistoryPeminjamanCreateManyPeminjamanInput | HistoryPeminjamanCreateManyPeminjamanInput[]
    skipDuplicates?: boolean
  }

  export type MahasiswaCreateWithoutPeminjamansInput = {
    id?: string
    nama: string
    isActive?: boolean
    jurusan: string
    nim: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type MahasiswaUncheckedCreateWithoutPeminjamansInput = {
    id?: string
    nama: string
    isActive?: boolean
    jurusan: string
    nim: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type MahasiswaCreateOrConnectWithoutPeminjamansInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutPeminjamansInput, MahasiswaUncheckedCreateWithoutPeminjamansInput>
  }

  export type DetailPeminjamanUpsertWithWhereUniqueWithoutPeminjamanInput = {
    where: DetailPeminjamanWhereUniqueInput
    update: XOR<DetailPeminjamanUpdateWithoutPeminjamanInput, DetailPeminjamanUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<DetailPeminjamanCreateWithoutPeminjamanInput, DetailPeminjamanUncheckedCreateWithoutPeminjamanInput>
  }

  export type DetailPeminjamanUpdateWithWhereUniqueWithoutPeminjamanInput = {
    where: DetailPeminjamanWhereUniqueInput
    data: XOR<DetailPeminjamanUpdateWithoutPeminjamanInput, DetailPeminjamanUncheckedUpdateWithoutPeminjamanInput>
  }

  export type DetailPeminjamanUpdateManyWithWhereWithoutPeminjamanInput = {
    where: DetailPeminjamanScalarWhereInput
    data: XOR<DetailPeminjamanUpdateManyMutationInput, DetailPeminjamanUncheckedUpdateManyWithoutPeminjamanInput>
  }

  export type HistoryPeminjamanUpsertWithWhereUniqueWithoutPeminjamanInput = {
    where: HistoryPeminjamanWhereUniqueInput
    update: XOR<HistoryPeminjamanUpdateWithoutPeminjamanInput, HistoryPeminjamanUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<HistoryPeminjamanCreateWithoutPeminjamanInput, HistoryPeminjamanUncheckedCreateWithoutPeminjamanInput>
  }

  export type HistoryPeminjamanUpdateWithWhereUniqueWithoutPeminjamanInput = {
    where: HistoryPeminjamanWhereUniqueInput
    data: XOR<HistoryPeminjamanUpdateWithoutPeminjamanInput, HistoryPeminjamanUncheckedUpdateWithoutPeminjamanInput>
  }

  export type HistoryPeminjamanUpdateManyWithWhereWithoutPeminjamanInput = {
    where: HistoryPeminjamanScalarWhereInput
    data: XOR<HistoryPeminjamanUpdateManyMutationInput, HistoryPeminjamanUncheckedUpdateManyWithoutPeminjamanInput>
  }

  export type HistoryPeminjamanScalarWhereInput = {
    AND?: HistoryPeminjamanScalarWhereInput | HistoryPeminjamanScalarWhereInput[]
    OR?: HistoryPeminjamanScalarWhereInput[]
    NOT?: HistoryPeminjamanScalarWhereInput | HistoryPeminjamanScalarWhereInput[]
    id?: StringFilter<"HistoryPeminjaman"> | string
    peminjamanId?: StringFilter<"HistoryPeminjaman"> | string
    status?: StringFilter<"HistoryPeminjaman"> | string
    tanggalStatus?: DateTimeFilter<"HistoryPeminjaman"> | Date | string
    cretedAt?: DateTimeFilter<"HistoryPeminjaman"> | Date | string
    deletedAt?: DateTimeNullableFilter<"HistoryPeminjaman"> | Date | string | null
    updatedAt?: DateTimeFilter<"HistoryPeminjaman"> | Date | string
  }

  export type MahasiswaUpsertWithoutPeminjamansInput = {
    update: XOR<MahasiswaUpdateWithoutPeminjamansInput, MahasiswaUncheckedUpdateWithoutPeminjamansInput>
    create: XOR<MahasiswaCreateWithoutPeminjamansInput, MahasiswaUncheckedCreateWithoutPeminjamansInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutPeminjamansInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutPeminjamansInput, MahasiswaUncheckedUpdateWithoutPeminjamansInput>
  }

  export type MahasiswaUpdateWithoutPeminjamansInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    jurusan?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaUncheckedUpdateWithoutPeminjamansInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    jurusan?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuCreateWithoutDetailsInput = {
    id?: string
    judul: string
    penerbit?: string | null
    tahunTerbit?: number | null
    penulis?: string | null
    stok: number
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    rak: RakCreateNestedOneWithoutBukuListInput
  }

  export type BukuUncheckedCreateWithoutDetailsInput = {
    id?: string
    judul: string
    penerbit?: string | null
    tahunTerbit?: number | null
    penulis?: string | null
    rakId: string
    stok: number
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type BukuCreateOrConnectWithoutDetailsInput = {
    where: BukuWhereUniqueInput
    create: XOR<BukuCreateWithoutDetailsInput, BukuUncheckedCreateWithoutDetailsInput>
  }

  export type PeminjamanCreateWithoutDetailsInput = {
    id?: string
    tanggalPinjam: Date | string
    tanggalKembali?: Date | string | null
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    histories?: HistoryPeminjamanCreateNestedManyWithoutPeminjamanInput
    mahasiswa: MahasiswaCreateNestedOneWithoutPeminjamansInput
  }

  export type PeminjamanUncheckedCreateWithoutDetailsInput = {
    id?: string
    mahasiswaId: string
    tanggalPinjam: Date | string
    tanggalKembali?: Date | string | null
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    histories?: HistoryPeminjamanUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type PeminjamanCreateOrConnectWithoutDetailsInput = {
    where: PeminjamanWhereUniqueInput
    create: XOR<PeminjamanCreateWithoutDetailsInput, PeminjamanUncheckedCreateWithoutDetailsInput>
  }

  export type BukuUpsertWithoutDetailsInput = {
    update: XOR<BukuUpdateWithoutDetailsInput, BukuUncheckedUpdateWithoutDetailsInput>
    create: XOR<BukuCreateWithoutDetailsInput, BukuUncheckedCreateWithoutDetailsInput>
    where?: BukuWhereInput
  }

  export type BukuUpdateToOneWithWhereWithoutDetailsInput = {
    where?: BukuWhereInput
    data: XOR<BukuUpdateWithoutDetailsInput, BukuUncheckedUpdateWithoutDetailsInput>
  }

  export type BukuUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    penerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tahunTerbit?: NullableIntFieldUpdateOperationsInput | number | null
    penulis?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: IntFieldUpdateOperationsInput | number
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rak?: RakUpdateOneRequiredWithoutBukuListNestedInput
  }

  export type BukuUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    penerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tahunTerbit?: NullableIntFieldUpdateOperationsInput | number | null
    penulis?: NullableStringFieldUpdateOperationsInput | string | null
    rakId?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanUpsertWithoutDetailsInput = {
    update: XOR<PeminjamanUpdateWithoutDetailsInput, PeminjamanUncheckedUpdateWithoutDetailsInput>
    create: XOR<PeminjamanCreateWithoutDetailsInput, PeminjamanUncheckedCreateWithoutDetailsInput>
    where?: PeminjamanWhereInput
  }

  export type PeminjamanUpdateToOneWithWhereWithoutDetailsInput = {
    where?: PeminjamanWhereInput
    data: XOR<PeminjamanUpdateWithoutDetailsInput, PeminjamanUncheckedUpdateWithoutDetailsInput>
  }

  export type PeminjamanUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: HistoryPeminjamanUpdateManyWithoutPeminjamanNestedInput
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutPeminjamansNestedInput
  }

  export type PeminjamanUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: HistoryPeminjamanUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type PeminjamanCreateWithoutHistoriesInput = {
    id?: string
    tanggalPinjam: Date | string
    tanggalKembali?: Date | string | null
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    details?: DetailPeminjamanCreateNestedManyWithoutPeminjamanInput
    mahasiswa: MahasiswaCreateNestedOneWithoutPeminjamansInput
  }

  export type PeminjamanUncheckedCreateWithoutHistoriesInput = {
    id?: string
    mahasiswaId: string
    tanggalPinjam: Date | string
    tanggalKembali?: Date | string | null
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    details?: DetailPeminjamanUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type PeminjamanCreateOrConnectWithoutHistoriesInput = {
    where: PeminjamanWhereUniqueInput
    create: XOR<PeminjamanCreateWithoutHistoriesInput, PeminjamanUncheckedCreateWithoutHistoriesInput>
  }

  export type PeminjamanUpsertWithoutHistoriesInput = {
    update: XOR<PeminjamanUpdateWithoutHistoriesInput, PeminjamanUncheckedUpdateWithoutHistoriesInput>
    create: XOR<PeminjamanCreateWithoutHistoriesInput, PeminjamanUncheckedCreateWithoutHistoriesInput>
    where?: PeminjamanWhereInput
  }

  export type PeminjamanUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: PeminjamanWhereInput
    data: XOR<PeminjamanUpdateWithoutHistoriesInput, PeminjamanUncheckedUpdateWithoutHistoriesInput>
  }

  export type PeminjamanUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPeminjamanUpdateManyWithoutPeminjamanNestedInput
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutPeminjamansNestedInput
  }

  export type PeminjamanUncheckedUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPeminjamanUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type PeminjamanCreateManyMahasiswaInput = {
    id?: string
    tanggalPinjam: Date | string
    tanggalKembali?: Date | string | null
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type PeminjamanUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPeminjamanUpdateManyWithoutPeminjamanNestedInput
    histories?: HistoryPeminjamanUpdateManyWithoutPeminjamanNestedInput
  }

  export type PeminjamanUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPeminjamanUncheckedUpdateManyWithoutPeminjamanNestedInput
    histories?: HistoryPeminjamanUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type PeminjamanUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPeminjamanCreateManyBukuInput = {
    id?: string
    peminjamanId: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type DetailPeminjamanUpdateWithoutBukuInput = {
    id?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjaman?: PeminjamanUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type DetailPeminjamanUncheckedUpdateWithoutBukuInput = {
    id?: StringFieldUpdateOperationsInput | string
    peminjamanId?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPeminjamanUncheckedUpdateManyWithoutBukuInput = {
    id?: StringFieldUpdateOperationsInput | string
    peminjamanId?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuCreateManyRakInput = {
    id?: string
    judul: string
    penerbit?: string | null
    tahunTerbit?: number | null
    penulis?: string | null
    stok: number
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type BukuUpdateWithoutRakInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    penerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tahunTerbit?: NullableIntFieldUpdateOperationsInput | number | null
    penulis?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: IntFieldUpdateOperationsInput | number
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPeminjamanUpdateManyWithoutBukuNestedInput
  }

  export type BukuUncheckedUpdateWithoutRakInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    penerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tahunTerbit?: NullableIntFieldUpdateOperationsInput | number | null
    penulis?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: IntFieldUpdateOperationsInput | number
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPeminjamanUncheckedUpdateManyWithoutBukuNestedInput
  }

  export type BukuUncheckedUpdateManyWithoutRakInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    penerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tahunTerbit?: NullableIntFieldUpdateOperationsInput | number | null
    penulis?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: IntFieldUpdateOperationsInput | number
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPeminjamanCreateManyPeminjamanInput = {
    id?: string
    bukuId: string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type HistoryPeminjamanCreateManyPeminjamanInput = {
    id?: string
    status: string
    tanggalStatus: Date | string
    cretedAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type DetailPeminjamanUpdateWithoutPeminjamanInput = {
    id?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buku?: BukuUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type DetailPeminjamanUncheckedUpdateWithoutPeminjamanInput = {
    id?: StringFieldUpdateOperationsInput | string
    bukuId?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPeminjamanUncheckedUpdateManyWithoutPeminjamanInput = {
    id?: StringFieldUpdateOperationsInput | string
    bukuId?: StringFieldUpdateOperationsInput | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryPeminjamanUpdateWithoutPeminjamanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tanggalStatus?: DateTimeFieldUpdateOperationsInput | Date | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryPeminjamanUncheckedUpdateWithoutPeminjamanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tanggalStatus?: DateTimeFieldUpdateOperationsInput | Date | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryPeminjamanUncheckedUpdateManyWithoutPeminjamanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tanggalStatus?: DateTimeFieldUpdateOperationsInput | Date | string
    cretedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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