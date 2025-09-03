export const prerender = false;

import type { APIRoute } from "astro";
import { writeFile, mkdir } from "node:fs/promises"



export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const dirName = `/app/job-applications/${formData.get("givenName")}-${formData.get("lastName")}-${formData.get("dob")}-${new Date().toISOString()}`;
  await mkdir(dirName);
  const content = `
Emri : ${formData.get("givenName")}
Mbiemri : ${formData.get("lastName")} 
Ditelindja : ${formData.get("dob")} 
Email : ${formData.get("email")} 
Nr. Tel : ${formData.get("telNr")} 
Pozicioni : ${formData.get("jobId")}
`
  const cv = Buffer.from(await (formData.get("CV") as File).arrayBuffer())
  const motivationLetter = Buffer.from(await (formData.get("motivationLetter") as File).arrayBuffer())
  await writeFile(`${dirName}/dhenat.txt`, content, { flag: "w+" });
  await writeFile(`${dirName}/CV.pdf`, cv);
  await writeFile(`${dirName}/motivationLetter.pdf`, motivationLetter);
  return Response.redirect(request.headers.get("referer"));
};
