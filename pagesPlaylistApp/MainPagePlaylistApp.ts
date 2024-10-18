import { Locator, Page, expect } from "@playwright/test";

export class MainPagePlaylistApp {
  //Properties
  readonly page: Page;
  searchBar: Locator;
  addButton: Locator;
  tracks: String[];
  addButtonMultipleSongs: Locator;
  constructor(page: Page) {
    //Locators
    this.page = page;
    this.tracks = [
      "Summer Breeze",
      "Autumn Leaves",
      "Winter Winds",
      "Spring Dance",
      "Rainy Mood",
    ];
    this.addButtonMultipleSongs = page.getByRole("button", {
      name: "Add 5 tracks",
    });
    this.searchBar = page.getByLabel("Search");
    this.addButton = page
      .locator("div")
      .filter({ hasText: /^Summer Breeze03:35\+$/ })
      .getByRole("button");
  }
  //Test case 1
  async testSearchBar() {
    await this.page.goto("/");
    await this.searchBar.fill("Spring Dance");
    await expect(this.page.getByText("Spring Dance")).toBeVisible();
  }
  //Test case 2
  async addTrackToPlaylist() {
    await this.page.goto("/");
    await this.addButton.click();
    await expect(
      this.page.locator("#playlist").getByText("Summer Breeze")
    ).toBeVisible();
  }
  //Test case 3
  async addMultipleTracks() {
    await this.page.goto("/");
    const checkboxes = this.page.locator('input[aria-label="controlled"]');

    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
      const checkbox = checkboxes.nth(i);
      await checkbox.check();
    }

    await this.addButtonMultipleSongs.click();

    for (const item of this.tracks as string[]) {
      await expect(
        this.page.locator("#playlist").getByText(item)
      ).toBeVisible();
    }
  }
}
