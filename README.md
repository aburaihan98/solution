# What are some differences between interfaces and types in TypeScript?

1. Interface only describes the structure of an object,

And type can be used to structure anything, such as object, primitive, function, etc.

2. In the case of interface, multiple interfaces can be extended with extends

But multiple types can be mixed with & (intersection) in the type field,

3. If the same interface is declared multiple times, TypeScript merges them but cannot be merged in the type field, it can be declared only once

4. Primitive types cannot be used in interfaces but primitive types can be used in types (for example: type Age = number )

✅ When to use interface?

1. When you describe the structure of an object or class,

2. When you need to extend/inherit from multiple places.

3. When Declaration Merging is required (especially in third-party libs or global types)

interface User {
name: string;
age: number;
}

interface User {
email: string;
}

// Final type:
const user: User = {
name: "Abu Raihan",
age: 30,
email: "aburaihan.com",
};

✅ When to use type?

1. When you alias a union, intersection, tuple or primitive.

2. When you define a function type.

3. When you add something more specific to a type.

type ID = string | number;

type User = {
name: string;
age: number;
};

type Admin = User & {
role: "admin";
};

🎯 Summary

If you only want to type the structure of the object ➜ use interface.

If you want to type union, primitive, tuple, function type etc. ➜ use type.

If you need declaration merging ➜ use interface.

# What is the use of the keyof keyword in TypeScript? Provide an example.

In TypeScript, keyof is a type operator that allows you to create a union type with the names (keys) of all the properties of an object type.

For example,

type Person = {
name: string;
age: number;
isEmployed: Boolean;
};

type PersonKeys = keyof Person;

PersonKeys will be

"name" | "age" | "isEmployed"

You can also create generic utility types using keyof.
For example,

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
return obj[key];
}

const person: Person = {
name: "Alice",
age: 30,
isEmployed: true
};

const age = getValue(person, "age");
