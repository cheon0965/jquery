export async function GET(req, { params }) {
  console.log(params);
  // console.log(params);
  return Response.json(params);
}
