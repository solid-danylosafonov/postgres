export declare const ERROR_MESSAGE = "E";
export declare const AUTHENTICATION_TYPE: {
    readonly CLEAR_TEXT: 3;
    readonly GSS_CONTINUE: 8;
    readonly GSS_STARTUP: 7;
    readonly MD5: 5;
    readonly NO_AUTHENTICATION: 0;
    readonly SASL_CONTINUE: 11;
    readonly SASL_FINAL: 12;
    readonly SASL_STARTUP: 10;
    readonly SCM: 6;
    readonly SSPI: 9;
};
export declare const INCOMING_QUERY_BIND_MESSAGES: {};
export declare const INCOMING_QUERY_PARSE_MESSAGES: {};
export declare const INCOMING_AUTHENTICATION_MESSAGES: {
    readonly AUTHENTICATION: "R";
    readonly BACKEND_KEY: "K";
    readonly PARAMETER_STATUS: "S";
    readonly READY: "Z";
};
export declare const INCOMING_TLS_MESSAGES: {
    readonly ACCEPTS_TLS: "S";
    readonly NO_ACCEPTS_TLS: "N";
};
export declare const INCOMING_QUERY_MESSAGES: {
    readonly BIND_COMPLETE: "2";
    readonly PARSE_COMPLETE: "1";
    readonly COMMAND_COMPLETE: "C";
    readonly DATA_ROW: "D";
    readonly EMPTY_QUERY: "I";
    readonly NO_DATA: "n";
    readonly NOTICE_WARNING: "N";
    readonly PARAMETER_STATUS: "S";
    readonly READY: "Z";
    readonly ROW_DESCRIPTION: "T";
};
