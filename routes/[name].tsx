/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <div>
      Hello {props.params.name}
      <div style={{ width: 300, height: 300 }} id="xx"></div>
    </div>
  );
}
