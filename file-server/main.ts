import * as http from "../../util/mod.ts";

const mux = new http.ServeMux();

const fs = http.fileServer("../views");

const sp = http.stripPrefix("/views", fs);

mux.handle("/views/*", sp);

const srv = new http.Server({ port: 7878, handler: mux });

await srv.listenAndServe();