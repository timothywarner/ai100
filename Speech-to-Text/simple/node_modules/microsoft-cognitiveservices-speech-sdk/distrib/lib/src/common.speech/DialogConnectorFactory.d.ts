import { IConnection } from "../common/Exports";
import { ConnectionFactoryBase } from "./ConnectionFactoryBase";
import { AuthInfo, RecognizerConfig } from "./Exports";
export declare class DialogConnectionFactory extends ConnectionFactoryBase {
    private static Constants;
    create: (config: RecognizerConfig, authInfo: AuthInfo, connectionId?: string) => IConnection;
}
