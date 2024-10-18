import { test } from "@playwright/test";
import { MainPagePlaylistApp } from "../pagesPlaylistApp/MainPagePlaylistApp";
test("Playlist functions", async ({ page }) => {
  const mainPagePlaylistApp = new MainPagePlaylistApp(page);
  await mainPagePlaylistApp.testSearchBar();
  await mainPagePlaylistApp.addTrackToPlaylist();
  await mainPagePlaylistApp.addMultipleTracks();
});
