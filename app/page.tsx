"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    const { error } = await supabase.from("subscribers").insert({ email });
    if (error) {
      alert("Gagal: " + error.message);
    } else {
      alert("Berhasil subscribe!");
      setEmail("");
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Counter</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-4">
          <Button variant="destructive" onClick={() => setCount(count - 1)}>
            -
          </Button>
          <span className="text-lg font-medium">{count}</span>
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </CardContent>
      </Card>

      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Subscribe</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-2">
          <Input
            placeholder="Masukkan email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleSubscribe}>Kirim</Button>
        </CardContent>
      </Card>
    </div>
  );
}
