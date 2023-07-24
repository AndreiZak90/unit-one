export default function healthTest(obj) {
  let meaning;
  if (obj.health > 50) {
    meaning = "healthy";
  }
  if (obj.health <= 50 && obj.health >= 15) {
    meaning = "wounded";
  }
  if (obj.health < 15) {
    meaning = "critical";
  }
  return meaning;
}
