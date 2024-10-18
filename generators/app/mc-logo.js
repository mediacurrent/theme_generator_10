/* eslint-disable max-len, quotes */

// Import the `chalk` module using ES Modules syntax
import chalk from 'chalk';

// Define the `mcLogo` using template literals for better readability
const mcLogo = chalk.blue(`
                    .         .....               .....
         .,::loodxOO0o.   ,lx0KKKK0Okd:.     .:ok0KKKK0ko'
         .ldOXMMMMMMMx..:ONMWNNWMMMMMMWO'  .oKWWNNWMMMMMMXl
             ,OMMMMMMx,xNKo:'''c0MMMMMMMx.;0W0o;'',oXMMMMMX;
              :NMMMMMXKXo.      ;XMMMMMMXOXKc.      lWMMMMWo
              ;XMMMMMMX:        .kMMMMMMMMK;        ;XMMMMMx.
              ;KMMMMMWo          cOkkkkOOk;         ,KMMMMMx.
              ;KMWXKOo.                             .dOKNWMx.
              .::,......',;::clloooooooooollc::,'..    ..,:,
             .';cldxO0KXNNNNNNNNNWMMMMMMMWWWMMMWNXKOkdoc;'..
      .,:looddONMMMMMKl;;,'''...'kMMMMMMWd,,;:cldxO0XWMMMNX0kdlc;'.
 ..',;:::,'.. ;XMMMMMk.          oMMMMMMNc         .cXMMMMMNXNWMWNKOxdl:'
...           ;XMMMMMk.          oMMMMMMN:          ,KMMMMMO,.,:loxO0KKO:
              ;XMMMMMk.          dMMMMMMNc          ,KMMMMMk.       ...
              cNMMMMM0'         .xMMMMMMWl          :NMMMMMK,
            .:0MMMMMMWx'.      .oXMMMMMMMK:.      .;OWMMMMMWk,.
         .cox0KKKKKKKKKOdl. .:dk0KKKKKKKKK0xo;  'odOKKKKKKKKKOdo:.
          ................   ................    ...............
              Welcome to the ${chalk.blue('Mediacurrent D10 theme')} generator!
`);

// Export the `mcLogo` using ES Modules syntax
export default mcLogo;
