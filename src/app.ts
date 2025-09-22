import { Server } from "./presentation/server";
import 'dotenv/config'
import { envs } from "./config/plugin/envs.plugin";


(async () => {
    main();
})();

function main() {
    Server.start();
    // console.log(envs);
}