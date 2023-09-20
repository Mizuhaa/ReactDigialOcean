export function convertFood(food: string | null | undefined) {
  switch (food) {
    case "insects":
      return "🐜";
    case "meat":
      return "🍖";
    case "plants":
      return "🌱";
    default:
      return "❓";
  }
}