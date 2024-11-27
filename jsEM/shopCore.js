var { ShopJSONS } = new class ShopCoreNS {
  static JSONS = {
    normal: '../products/normal.json',
    games: '../products/games.json',
    pepsi: '../products/pepsi.json',
  }

  static async loadJSON(path) {
    return await (await fetch(path)).json()
  }

  ShopJSONS = Object.entries(ShopCoreNS.JSONS).reduce(
    async (accPromise, [key, value]) => {
      const acc = await accPromise;
      acc[key] = await ShopCoreNS.loadJSON(value);
      return acc;
    },
    Promise.resolve({})
  );
}