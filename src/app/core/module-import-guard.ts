export function throwIfAlreadyLoaded(parrentModule: any, moduleName: any) {
  if (parrentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
