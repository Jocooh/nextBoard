// '/api/abc/아무문자' 로 누가 요청하면 이 파일이 실행
export default async function handler(req, res) {
  console.log(req.query);
  return res.status(200).json();
}
