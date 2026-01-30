"use client";
import { useState } from "react";

const colors = {
  RED:"red",
  YELLOW:"yellow",
  GREEN:"green",
  BLACK:"black",
  GRAY:"gray"
};

export default function Page(){

const [text,setText]=useState("");
const [result,setResult]=useState({level:"GRAY",reason:"ابدئي بالكتابة"});

async function analyze(){
  const res = await fetch("/api/analyze",{
    method:"POST",
    headers:{ "Content-Type":"application/json"},
    body: JSON.stringify({text})
  });
  const data = await res.json();
  setResult(data);
}

return (
<div className="container">

<h1>النموذج الأولي</h1>

<div className="card">

<div className="status">
<span className={`dot ${colors[result.level]}`}></span>
<b>{result.level}</b>
</div>

<textarea
value={text}
onChange={e=>setText(e.target.value)}
placeholder="اكتبي محضر الجلسة هنا..."
/>

<br/><br/>

<button onClick={analyze}>
تحليل
</button>

<p>{result.reason}</p>

</div>
</div>
);
}
