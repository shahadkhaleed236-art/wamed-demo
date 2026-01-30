import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req){
  const { text } = await req.json();

  if(text.length < 20){
    return Response.json({
      level:"GRAY",
      reason:"النص غير كافٍ",
      hint:"أضيفي تفاصيل أكثر"
    });
  }

  const r = await client.responses.create({
    model:"gpt-5-mini",
    input:`حلل إجرائيًا وأعد JSON فقط (level, reason, hint): ${text}`
  });

  try{
    return Response.json(JSON.parse(r.output[0].content[0].text));
  }catch{
    return Response.json({
      level:"GRAY",
      reason:"تعذر التحليل",
      hint:"أعيدي المحاولة"
    });
  }
}
