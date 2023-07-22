# Adding GRNOC UI to existing project

GRNOC UI is a react package that provides a set of components and utilities for building GlobalNOC web applications. 
The package is available on GlobalNOC's private npm registry.

To get started, you will need to modify your GlobalNOC github account's PAT to allow access to the private registry.

Go to [https://github.grnoc.iu.edu/settings/tokens](https://github.grnoc.iu.edu/settings/tokens) and click on the "Generate new token" button.
Give the token a name and check the "read:packages" scope. Click the "Generate token" button at the bottom of the page.

Copy the generated token and save it somewhere safe, preferably in a password manager. You will not be able to see it again.

Next, you will need to create a `.npmrc` file in the root of your project. 
This file will contain the following lines:

```
@npm:registry=https://npm.github.grnoc.iu.edu/
```

Next, you need to login to the registry. Run the following command:

```
npm login --scope=@npm --registry=https://npm.github.grnoc.iu.edu/
```

You will be prompted for your username, password, and email.
Your username is your GlobalNOC github username, your password is the PAT you generated earlier, and your email is your GitHub enterprise email.

Once you have logged in, you can install the GRNOC UI package by running the following command:

```
yarn add @npm/grnoc-ui-provider @npm/grnoc-ui-hooks @npm/grnoc-ui-funcs @npm/grnoc-ui-styles @npm/grnoc-ui-theme
```

These are the core packages that make up GRNOC UI.

You should also install the components package. For now, we will just install the table and button component.

```
yarn add @npm/grnoc-ui-table @npm/grnoc-ui-button
```

Now in the index.tsx file add the following lines:

```diff
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
+ import { GNUIProvider } from '@npm/grnoc-ui-provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
+   <GNUIProvider>
      <App />
+   </GNUIProvider>
  </React.StrictMode>,
)
```

This will wrap your application in the GRNOC UI provider. This provider will provide the theme and other utilities to the rest of the application.

Now you can use the table & button component in your application. For example, you can add the following lines to the App.tsx file:

```diff
import React from 'react'
+ import { Table, Thead, Tbody, Tr, Th, Td } from '@npm/grnoc-ui-table';
+ import { Button } from '@npm/grnoc-ui-button';

function App() {
  return (
    <div>
+     <Button variant="primary">Primary Button</Button>
+     <Button>Secondary Button</Button>
+     <Table>
+       <Thead>
+         <Tr>
+           <Th>Header 1</Th>
+           <Th>Header 2</Th>
+         </Tr>
+       </Thead>
+       <Tbody>
+         <Tr>
+           <Td>Cell 1</Td>
+           <Td>Cell 2</Td>
+         </Tr>
+       </Tbody>
+     </Table>
    </div>
  )
}

You should see pre-styled buttons and a table in your application.

Update the Table example from the last assignment to use the new Table and Button components.