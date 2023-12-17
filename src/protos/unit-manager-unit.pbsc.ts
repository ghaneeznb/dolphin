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
import * as thisProto from './unit-manager-unit.pb';
import { GRPC_UNIT_MANAGEMENT_SERVICE_CLIENT_SETTINGS } from './unit-manager-unit.pbconf';
/**
 * Service client implementation for unit_management.v1.UnitManagementService
 */
@Injectable({ providedIn: 'any' })
export class UnitManagementServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /unit_management.v1.UnitManagementService/Units
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
        path: '/unit_management.v1.UnitManagementService/Units',
        requestData,
        requestMetadata,
        requestClass: thisProto.UnitsRequest,
        responseClass: thisProto.UnitsResponse
      });
    }
  };

  constructor(
    @Optional()
    @Inject(GRPC_UNIT_MANAGEMENT_SERVICE_CLIENT_SETTINGS)
    settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'unit_management.v1.UnitManagementService',
      settings
    );
  }

  /**
   * Unary call @/unit_management.v1.UnitManagementService/Units
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
}
