/** @format */
import React from "react";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold  mb-4">Button Component</h1>
      <div className="flex gap-2 flex-wrap">


        <Button size="sm" className="" variant="default">
          Default
        </Button>

        <Button size="default" variant="outline">
          Outline
        </Button>


        <Button variant="secondary" size="lg">
          Secondary
        </Button>

        <Button variant="destructive"> Destructive </Button>

        <Button variant="ghost"> Ghost </Button>

        <Button variant="link"> Link </Button>
        
      </div>
    </main>
  );
}
