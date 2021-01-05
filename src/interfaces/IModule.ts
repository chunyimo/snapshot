export interface IModule {
  moduleKey: string;
  path: string;
  component: React.ReactNode;
  reducer: any;
  saga: any;
}
