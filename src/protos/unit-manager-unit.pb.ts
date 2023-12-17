/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export enum ConnectionState {
  CONNECTION_STATE_INIT = 0,
  CONNECTION_STATE_MESSAGE_SENT = 1,
  CONNECTION_STATE_MESSAGE_DELIVERED = 2,
  CONNECTION_STATE_DEVICE_CONNECTED = 3,
  CONNECTION_STATE_DEVICE_CONFIG_SET = 4,
  CONNECTION_STATE_DEVICE_FAILED = 5
}
/**
 * Message implementation for unit_management.v1.Unit
 */
export class Unit implements GrpcMessage {
  static id = 'unit_management.v1.Unit';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Unit();
    Unit.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Unit) {
    _instance.id = _instance.id || '0';
    _instance.title = _instance.title || '';
    _instance.icon = _instance.icon || '';
    _instance.plateNumber = _instance.plateNumber || '';
    _instance.connectionState = _instance.connectionState || 0;
    _instance.simNumber = _instance.simNumber || '';
    _instance.isArchive = _instance.isArchive || false;
    _instance.deviceType = _instance.deviceType || '';
    _instance.imei = _instance.imei || '';
    _instance.lastPointTime = _instance.lastPointTime || 0;
    _instance.createdAt = _instance.createdAt || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Unit, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readUint64String();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        case 3:
          _instance.icon = _reader.readString();
          break;
        case 4:
          _instance.plateNumber = _reader.readString();
          break;
        case 5:
          _instance.connectionState = _reader.readEnum();
          break;
        case 6:
          _instance.simNumber = _reader.readString();
          break;
        case 7:
          _instance.isArchive = _reader.readBool();
          break;
        case 8:
          _instance.deviceType = _reader.readString();
          break;
        case 9:
          _instance.imei = _reader.readString();
          break;
        case 10:
          _instance.lastPointTime = _reader.readUint32();
          break;
        case 11:
          _instance.createdAt = _reader.readUint32();
          break;
        default:
          _reader.skipField();
      }
    }

    Unit.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Unit, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeUint64String(1, _instance.id);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.icon) {
      _writer.writeString(3, _instance.icon);
    }
    if (_instance.plateNumber) {
      _writer.writeString(4, _instance.plateNumber);
    }
    if (_instance.connectionState) {
      _writer.writeEnum(5, _instance.connectionState);
    }
    if (_instance.simNumber) {
      _writer.writeString(6, _instance.simNumber);
    }
    if (_instance.isArchive) {
      _writer.writeBool(7, _instance.isArchive);
    }
    if (_instance.deviceType) {
      _writer.writeString(8, _instance.deviceType);
    }
    if (_instance.imei) {
      _writer.writeString(9, _instance.imei);
    }
    if (_instance.lastPointTime) {
      _writer.writeUint32(10, _instance.lastPointTime);
    }
    if (_instance.createdAt) {
      _writer.writeUint32(11, _instance.createdAt);
    }
  }

  private _id: string;
  private _title: string;
  private _icon: string;
  private _plateNumber: string;
  private _connectionState: ConnectionState;
  private _simNumber: string;
  private _isArchive: boolean;
  private _deviceType: string;
  private _imei: string;
  private _lastPointTime: number;
  private _createdAt: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Unit to deeply clone from
   */
  constructor(_value?: RecursivePartial<Unit.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.title = _value.title;
    this.icon = _value.icon;
    this.plateNumber = _value.plateNumber;
    this.connectionState = _value.connectionState;
    this.simNumber = _value.simNumber;
    this.isArchive = _value.isArchive;
    this.deviceType = _value.deviceType;
    this.imei = _value.imei;
    this.lastPointTime = _value.lastPointTime;
    this.createdAt = _value.createdAt;
    Unit.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get icon(): string {
    return this._icon;
  }
  set icon(value: string) {
    this._icon = value;
  }
  get plateNumber(): string {
    return this._plateNumber;
  }
  set plateNumber(value: string) {
    this._plateNumber = value;
  }
  get connectionState(): ConnectionState {
    return this._connectionState;
  }
  set connectionState(value: ConnectionState) {
    this._connectionState = value;
  }
  get simNumber(): string {
    return this._simNumber;
  }
  set simNumber(value: string) {
    this._simNumber = value;
  }
  get isArchive(): boolean {
    return this._isArchive;
  }
  set isArchive(value: boolean) {
    this._isArchive = value;
  }
  get deviceType(): string {
    return this._deviceType;
  }
  set deviceType(value: string) {
    this._deviceType = value;
  }
  get imei(): string {
    return this._imei;
  }
  set imei(value: string) {
    this._imei = value;
  }
  get lastPointTime(): number {
    return this._lastPointTime;
  }
  set lastPointTime(value: number) {
    this._lastPointTime = value;
  }
  get createdAt(): number {
    return this._createdAt;
  }
  set createdAt(value: number) {
    this._createdAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Unit.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Unit.AsObject {
    return {
      id: this.id,
      title: this.title,
      icon: this.icon,
      plateNumber: this.plateNumber,
      connectionState: this.connectionState,
      simNumber: this.simNumber,
      isArchive: this.isArchive,
      deviceType: this.deviceType,
      imei: this.imei,
      lastPointTime: this.lastPointTime,
      createdAt: this.createdAt
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Unit.AsProtobufJSON {
    return {
      id: this.id,
      title: this.title,
      icon: this.icon,
      plateNumber: this.plateNumber,
      connectionState:
        ConnectionState[
          this.connectionState === null || this.connectionState === undefined
            ? 0
            : this.connectionState
        ],
      simNumber: this.simNumber,
      isArchive: this.isArchive,
      deviceType: this.deviceType,
      imei: this.imei,
      lastPointTime: this.lastPointTime,
      createdAt: this.createdAt
    };
  }
}
export module Unit {
  /**
   * Standard JavaScript object representation for Unit
   */
  export interface AsObject {
    id: string;
    title: string;
    icon: string;
    plateNumber: string;
    connectionState: ConnectionState;
    simNumber: string;
    isArchive: boolean;
    deviceType: string;
    imei: string;
    lastPointTime: number;
    createdAt: number;
  }

  /**
   * Protobuf JSON representation for Unit
   */
  export interface AsProtobufJSON {
    id: string;
    title: string;
    icon: string;
    plateNumber: string;
    connectionState: string;
    simNumber: string;
    isArchive: boolean;
    deviceType: string;
    imei: string;
    lastPointTime: number;
    createdAt: number;
  }
}

/**
 * Message implementation for unit_management.v1.UnitsRequest
 */
export class UnitsRequest implements GrpcMessage {
  static id = 'unit_management.v1.UnitsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UnitsRequest();
    UnitsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UnitsRequest) {
    _instance.limit = _instance.limit || 0;
    _instance.queryFilter = _instance.queryFilter || '';
    _instance.offset = _instance.offset || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UnitsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.limit = _reader.readUint32();
          break;
        case 2:
          _instance.queryFilter = _reader.readString();
          break;
        case 3:
          _instance.offset = _reader.readUint32();
          break;
        default:
          _reader.skipField();
      }
    }

    UnitsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UnitsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.limit) {
      _writer.writeUint32(1, _instance.limit);
    }
    if (_instance.queryFilter) {
      _writer.writeString(2, _instance.queryFilter);
    }
    if (_instance.offset) {
      _writer.writeUint32(3, _instance.offset);
    }
  }

  private _limit: number;
  private _queryFilter: string;
  private _offset: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UnitsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UnitsRequest.AsObject>) {
    _value = _value || {};
    this.limit = _value.limit;
    this.queryFilter = _value.queryFilter;
    this.offset = _value.offset;
    UnitsRequest.refineValues(this);
  }
  get limit(): number {
    return this._limit;
  }
  set limit(value: number) {
    this._limit = value;
  }
  get queryFilter(): string {
    return this._queryFilter;
  }
  set queryFilter(value: string) {
    this._queryFilter = value;
  }
  get offset(): number {
    return this._offset;
  }
  set offset(value: number) {
    this._offset = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UnitsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UnitsRequest.AsObject {
    return {
      limit: this.limit,
      queryFilter: this.queryFilter,
      offset: this.offset
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UnitsRequest.AsProtobufJSON {
    return {
      limit: this.limit,
      queryFilter: this.queryFilter,
      offset: this.offset
    };
  }
}
export module UnitsRequest {
  /**
   * Standard JavaScript object representation for UnitsRequest
   */
  export interface AsObject {
    limit: number;
    queryFilter: string;
    offset: number;
  }

  /**
   * Protobuf JSON representation for UnitsRequest
   */
  export interface AsProtobufJSON {
    limit: number;
    queryFilter: string;
    offset: number;
  }
}

/**
 * Message implementation for unit_management.v1.UnitsResponse
 */
export class UnitsResponse implements GrpcMessage {
  static id = 'unit_management.v1.UnitsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UnitsResponse();
    UnitsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UnitsResponse) {
    _instance.totalCount = _instance.totalCount || 0;
    _instance.units = _instance.units || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UnitsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.totalCount = _reader.readUint32();
          break;
        case 2:
          const messageInitializer2 = new Unit();
          _reader.readMessage(
            messageInitializer2,
            Unit.deserializeBinaryFromReader
          );
          (_instance.units = _instance.units || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    UnitsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UnitsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.totalCount) {
      _writer.writeUint32(1, _instance.totalCount);
    }
    if (_instance.units && _instance.units.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.units as any,
        Unit.serializeBinaryToWriter
      );
    }
  }

  private _totalCount: number;
  private _units?: Unit[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UnitsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UnitsResponse.AsObject>) {
    _value = _value || {};
    this.totalCount = _value.totalCount;
    this.units = (_value.units || []).map(m => new Unit(m));
    UnitsResponse.refineValues(this);
  }
  get totalCount(): number {
    return this._totalCount;
  }
  set totalCount(value: number) {
    this._totalCount = value;
  }
  get units(): Unit[] | undefined {
    return this._units;
  }
  set units(value: Unit[] | undefined) {
    this._units = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UnitsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UnitsResponse.AsObject {
    return {
      totalCount: this.totalCount,
      units: (this.units || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UnitsResponse.AsProtobufJSON {
    return {
      totalCount: this.totalCount,
      units: (this.units || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module UnitsResponse {
  /**
   * Standard JavaScript object representation for UnitsResponse
   */
  export interface AsObject {
    totalCount: number;
    units?: Unit.AsObject[];
  }

  /**
   * Protobuf JSON representation for UnitsResponse
   */
  export interface AsProtobufJSON {
    totalCount: number;
    units: Unit.AsProtobufJSON[] | null;
  }
}
