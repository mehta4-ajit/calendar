export const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export function getMonthMatrix(date) {
  const y = date.getFullYear(),
    m = date.getMonth();
  const f = new Date(y, m, 1);
  const idx = f.getDay();
  const dim = new Date(y, m + 1, 0).getDate();
  const mat = [];
  let week = new Array(7).fill(null);
  let c = 1;
  for (let i = idx; i < 7; i++) week[i] = c++;
  mat.push(week);
  while (c <= dim) {
    let w = new Array(7).fill(null);
    for (let i = 0; i < 7 && c <= dim; i++) w[i] = c++;
    mat.push(w);
  }
  return mat;
}
