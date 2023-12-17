/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './tracking.pb';
import { GRPC_TRACKING_SERVICE_CLIENT_SETTINGS } from './tracking.pbconf';
/**
 * Service client implementation for unittracking.TrackingService
 */
@Injectable({ providedIn: 'any' })
export class TrackingServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /unittracking.TrackingService/Units
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UnitsResponse>>
     */
    units: (
      requestData: thisProto.UnitsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UnitsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/unittracking.TrackingService/Units',
        requestData,
        requestMetadata,
        requestClass: thisProto.UnitsRequest,
        responseClass: thisProto.UnitsResponse
      });
    },
    /**
     * Server streaming: /unittracking.TrackingService/LastValues
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LastValuesResponse>>
     */
    lastValues: (
      requestData: thisProto.LastValuesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LastValuesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/unittracking.TrackingService/LastValues',
        requestData,
        requestMetadata,
        requestClass: thisProto.LastValuesRequest,
        responseClass: thisProto.LastValuesResponse
      });
    },
    /**
     * Unary call: /unittracking.TrackingService/Metrics
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.MetricsResponse>>
     */
    metrics: (
      requestData: thisProto.MetricsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.MetricsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/unittracking.TrackingService/Metrics',
        requestData,
        requestMetadata,
        requestClass: thisProto.MetricsRequest,
        responseClass: thisProto.MetricsResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_TRACKING_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'unittracking.TrackingService',
      settings
    );
  }

  /**
   * Unary call @/unittracking.TrackingService/Units
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UnitsResponse>
   */
  units(
    requestData: thisProto.UnitsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UnitsResponse> {
    return this.$raw
      .units(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/unittracking.TrackingService/LastValues
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LastValuesResponse>
   */
  lastValues(
    requestData: thisProto.LastValuesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LastValuesResponse> {
    return this.$raw
      .lastValues(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/unittracking.TrackingService/Metrics
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MetricsResponse>
   */
  metrics(
    requestData: thisProto.MetricsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.MetricsResponse> {
    return this.$raw
      .metrics(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
