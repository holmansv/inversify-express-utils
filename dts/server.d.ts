import * as express from "express";
import * as inversify from "inversify";
import { interfaces } from "./interfaces";
export declare class InversifyExpressServer {
    private _router;
    private _container;
    private _app;
    private _configFn;
    private _errorConfigFn;
    private _routingConfig;
    private _AuthProvider;
    private _forceControllers;
    /**
     * Wrapper for the express server.
     *
     * @param container Container loaded with all controllers and their dependencies.
     * @param customRouter optional express.Router custom router
     * @param routingConfig optional interfaces.RoutingConfig routing config
     * @param customApp optional express.Application custom app
     * @param authProvider optional interfaces.AuthProvider auth provider
     * @param forceControllers optional boolean setting to force controllers (defaults do true)
     */
    constructor(container: inversify.interfaces.Container, customRouter?: express.Router | null, routingConfig?: interfaces.RoutingConfig | null, customApp?: express.Application | null, authProvider?: {
        new (): interfaces.AuthProvider;
    } | null, forceControllers?: boolean);
    /**
     * Sets the configuration function to be applied to the application.
     * Note that the config function is not actually executed until a call to InversifyExpresServer.build().
     *
     * This method is chainable.
     *
     * @param fn Function in which app-level middleware can be registered.
     */
    setConfig(fn: interfaces.ConfigFunction): InversifyExpressServer;
    /**
     * Sets the error handler configuration function to be applied to the application.
     * Note that the error config function is not actually executed until a call to InversifyExpresServer.build().
     *
     * This method is chainable.
     *
     * @param fn Function in which app-level error handlers can be registered.
     */
    setErrorConfig(fn: interfaces.ConfigFunction): InversifyExpressServer;
    /**
     * Applies all routes and configuration to the server, returning the express application.
     */
    build(): express.Application;
    private registerControllers;
    private resolveMidleware;
    private copyHeadersTo;
    private handleHttpResponseMessage;
    private handlerFactory;
    private _getHttpContext;
    private _createHttpContext;
    private _getCurrentUser;
    private extractParameters;
    private getParam;
    private _getPrincipal;
}
