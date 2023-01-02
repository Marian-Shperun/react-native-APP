import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

export function getHeaderTitle(route) {
  // If the concentrated route is not found we should assume that this is the starting screen
  // This can happen during the screen was not navigated
  // In our case it is "PostsScreen" since it's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "PostsScreen";

  switch (routeName) {
    case "Posts Screen":
      return "Публікації";
    case "Create Posts":
      return "Створити публікацію";
    case "Profile":
      return "Мій Профіль";
  }
}
