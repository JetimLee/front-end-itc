import { vi } from "vitest";

//this will automatically be used when mock is called, this is vitet/jest feature
//mocking a whole module from the fs module
export const promises = {
  writeFile: vi.fn((path, data) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }),
};
