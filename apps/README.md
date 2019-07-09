### Installing packages
Go to root folder of monorepo and run the yarn command:
```
cd linkdrop-monorepo
yarn
```

**Running Claiming App**  
You can easily go to 'app-claim' folder and run dev server (port: 9002):
```
cd linkdrop-monorepo/apps/app-claim
yarn dev:server
```

### Bundles
To create bundles for production you can run command 'yarn build' in 'app-claim' folder:
```
cd linkdrop-monorepo/apps/app-claim
yarn build
```

Bundles for 'app-claim' can be found in 'assets/scripts' folder. For 'linkdrop-ui-kit' it can be found in 'dist' folder as bundle.
