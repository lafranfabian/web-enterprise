import { PropHello } from "./helloworld.dto";

  export default function HelloWorld({ name,gender,umur }: PropHello) {
    return (
      <>
        <h1>Hello {name}</h1>
        <h2>my Gender is {gender}</h2>
        <h2>I am {umur} years old</h2>
      </>
    );
  }
  