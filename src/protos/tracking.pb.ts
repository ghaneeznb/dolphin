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
export enum Format {
  FORMAT_UNKNOWN = 0,
  FORMAT_NUMBER = 1,
  FORMAT_LENGTH = 2,
  FORMAT_DURATION_TIME = 3,
  FORMAT_TIME = 4,
  FORMAT_BOOLEAN = 5,
  FORMAT_SPEED = 6,
  FORMAT_VOLUME = 7,
  FORMAT_ANGLE = 8,
  FORMAT_WEIGHT = 9,
  FORMAT_TEMPERATURE = 10,
  FORMAT_SIGNAL_STRENGTH = 11,
  FORMAT_ROTATIONAL_SPEED = 12,
  FORMAT_ACCELERATION = 13
}
/**
 * Message implementation for unittracking.UnitsRequest
 */
export class UnitsRequest implements GrpcMessage {
  static id = 'unittracking.UnitsRequest';

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
    if (_instance.offset) {
      _writer.writeUint32(2, _instance.offset);
    }
  }

  private _limit: number;
  private _offset: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UnitsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UnitsRequest.AsObject>) {
    _value = _value || {};
    this.limit = _value.limit;
    this.offset = _value.offset;
    UnitsRequest.refineValues(this);
  }
  get limit(): number {
    return this._limit;
  }
  set limit(value: number) {
    this._limit = value;
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
    offset: number;
  }

  /**
   * Protobuf JSON representation for UnitsRequest
   */
  export interface AsProtobufJSON {
    limit: number;
    offset: number;
  }
}

/**
 * Message implementation for unittracking.UnitsResponse
 */
export class UnitsResponse implements GrpcMessage {
  static id = 'unittracking.UnitsResponse';

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
    _instance.units = _instance.units || [];
    _instance.totalUnits = _instance.totalUnits || 0;
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
          const messageInitializer1 = new Unit();
          _reader.readMessage(
            messageInitializer1,
            Unit.deserializeBinaryFromReader
          );
          (_instance.units = _instance.units || []).push(messageInitializer1);
          break;
        case 2:
          _instance.totalUnits = _reader.readUint32();
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
    if (_instance.units && _instance.units.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.units as any,
        Unit.serializeBinaryToWriter
      );
    }
    if (_instance.totalUnits) {
      _writer.writeUint32(2, _instance.totalUnits);
    }
  }

  private _units?: Unit[];
  private _totalUnits: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UnitsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UnitsResponse.AsObject>) {
    _value = _value || {};
    this.units = (_value.units || []).map(m => new Unit(m));
    this.totalUnits = _value.totalUnits;
    UnitsResponse.refineValues(this);
  }
  get units(): Unit[] | undefined {
    return this._units;
  }
  set units(value: Unit[] | undefined) {
    this._units = value;
  }
  get totalUnits(): number {
    return this._totalUnits;
  }
  set totalUnits(value: number) {
    this._totalUnits = value;
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
      units: (this.units || []).map(m => m.toObject()),
      totalUnits: this.totalUnits
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
      units: (this.units || []).map(m => m.toProtobufJSON(options)),
      totalUnits: this.totalUnits
    };
  }
}
export module UnitsResponse {
  /**
   * Standard JavaScript object representation for UnitsResponse
   */
  export interface AsObject {
    units?: Unit.AsObject[];
    totalUnits: number;
  }

  /**
   * Protobuf JSON representation for UnitsResponse
   */
  export interface AsProtobufJSON {
    units: Unit.AsProtobufJSON[] | null;
    totalUnits: number;
  }
}

/**
 * Message implementation for unittracking.Unit
 */
export class Unit implements GrpcMessage {
  static id = 'unittracking.Unit';

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
    _instance.metricName = _instance.metricName || [];
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
        case 4:
          _instance.icon = _reader.readString();
          break;
        case 5:
          (_instance.metricName = _instance.metricName || []).push(
            _reader.readString()
          );
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
      _writer.writeString(4, _instance.icon);
    }
    if (_instance.metricName && _instance.metricName.length) {
      _writer.writeRepeatedString(5, _instance.metricName);
    }
  }

  private _id: string;
  private _title: string;
  private _icon: string;
  private _metricName: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Unit to deeply clone from
   */
  constructor(_value?: RecursivePartial<Unit.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.title = _value.title;
    this.icon = _value.icon;
    this.metricName = (_value.metricName || []).slice();
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
  get metricName(): string[] {
    return this._metricName;
  }
  set metricName(value: string[]) {
    this._metricName = value;
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
      metricName: (this.metricName || []).slice()
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
      metricName: (this.metricName || []).slice()
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
    metricName: string[];
  }

  /**
   * Protobuf JSON representation for Unit
   */
  export interface AsProtobufJSON {
    id: string;
    title: string;
    icon: string;
    metricName: string[];
  }
}

/**
 * Message implementation for unittracking.LastValuesRequest
 */
export class LastValuesRequest implements GrpcMessage {
  static id = 'unittracking.LastValuesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LastValuesRequest();
    LastValuesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LastValuesRequest) {
    _instance.unitIds = _instance.unitIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LastValuesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.unitIds = _instance.unitIds || []).push(
            ...(_reader.readPackedUint64String() || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    LastValuesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LastValuesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.unitIds && _instance.unitIds.length) {
      _writer.writePackedUint64String(1, _instance.unitIds);
    }
  }

  private _unitIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LastValuesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<LastValuesRequest.AsObject>) {
    _value = _value || {};
    this.unitIds = (_value.unitIds || []).slice();
    LastValuesRequest.refineValues(this);
  }
  get unitIds(): string[] {
    return this._unitIds;
  }
  set unitIds(value: string[]) {
    this._unitIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LastValuesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LastValuesRequest.AsObject {
    return {
      unitIds: (this.unitIds || []).slice()
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
  ): LastValuesRequest.AsProtobufJSON {
    return {
      unitIds: (this.unitIds || []).slice()
    };
  }
}
export module LastValuesRequest {
  /**
   * Standard JavaScript object representation for LastValuesRequest
   */
  export interface AsObject {
    unitIds: string[];
  }

  /**
   * Protobuf JSON representation for LastValuesRequest
   */
  export interface AsProtobufJSON {
    unitIds: string[];
  }
}

/**
 * Message implementation for unittracking.LastValuesResponse
 */
export class LastValuesResponse implements GrpcMessage {
  static id = 'unittracking.LastValuesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LastValuesResponse();
    LastValuesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LastValuesResponse) {
    _instance.points = _instance.points || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LastValuesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Point();
          _reader.readMessage(
            messageInitializer1,
            Point.deserializeBinaryFromReader
          );
          (_instance.points = _instance.points || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    LastValuesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LastValuesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.points && _instance.points.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.points as any,
        Point.serializeBinaryToWriter
      );
    }
  }

  private _points?: Point[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LastValuesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<LastValuesResponse.AsObject>) {
    _value = _value || {};
    this.points = (_value.points || []).map(m => new Point(m));
    LastValuesResponse.refineValues(this);
  }
  get points(): Point[] | undefined {
    return this._points;
  }
  set points(value: Point[] | undefined) {
    this._points = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LastValuesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LastValuesResponse.AsObject {
    return {
      points: (this.points || []).map(m => m.toObject())
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
  ): LastValuesResponse.AsProtobufJSON {
    return {
      points: (this.points || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module LastValuesResponse {
  /**
   * Standard JavaScript object representation for LastValuesResponse
   */
  export interface AsObject {
    points?: Point.AsObject[];
  }

  /**
   * Protobuf JSON representation for LastValuesResponse
   */
  export interface AsProtobufJSON {
    points: Point.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for unittracking.Point
 */
export class Point implements GrpcMessage {
  static id = 'unittracking.Point';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Point();
    Point.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Point) {
    _instance.unitId = _instance.unitId || '0';
    _instance.time = _instance.time || '0';
    _instance.metricValues = _instance.metricValues || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Point, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.unitId = _reader.readUint64String();
          break;
        case 2:
          _instance.time = _reader.readInt64String();
          break;
        case 3:
          const msg_3 = {} as any;
          _reader.readMessage(
            msg_3,
            Point.MetricValuesEntry.deserializeBinaryFromReader
          );
          _instance.metricValues = _instance.metricValues || {};
          _instance.metricValues[msg_3.key] = msg_3.value;
          break;
        default:
          _reader.skipField();
      }
    }

    Point.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Point, _writer: BinaryWriter) {
    if (_instance.unitId) {
      _writer.writeUint64String(1, _instance.unitId);
    }
    if (_instance.time) {
      _writer.writeInt64String(2, _instance.time);
    }
    if (!!_instance.metricValues) {
      const keys_3 = Object.keys(_instance.metricValues as any);

      if (keys_3.length) {
        const repeated_3 = keys_3
          .map(key => ({
            key: key,
            value: (_instance.metricValues as any)[key]
          }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          3,
          repeated_3,
          Point.MetricValuesEntry.serializeBinaryToWriter
        );
      }
    }
  }

  private _unitId: string;
  private _time: string;
  private _metricValues: { [prop: string]: number };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Point to deeply clone from
   */
  constructor(_value?: RecursivePartial<Point.AsObject>) {
    _value = _value || {};
    this.unitId = _value.unitId;
    this.time = _value.time;
    (this.metricValues = _value!.metricValues
      ? Object.keys(_value!.metricValues).reduce(
          (r, k) => ({ ...r, [k]: _value!.metricValues![k] }),
          {}
        )
      : {}),
      Point.refineValues(this);
  }
  get unitId(): string {
    return this._unitId;
  }
  set unitId(value: string) {
    this._unitId = value;
  }
  get time(): string {
    return this._time;
  }
  set time(value: string) {
    this._time = value;
  }
  get metricValues(): { [prop: string]: number } {
    return this._metricValues;
  }
  set metricValues(value: { [prop: string]: number }) {
    this._metricValues = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Point.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Point.AsObject {
    return {
      unitId: this.unitId,
      time: this.time,
      metricValues: this.metricValues
        ? Object.keys(this.metricValues).reduce(
            (r, k) => ({ ...r, [k]: this.metricValues![k] }),
            {}
          )
        : {}
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
  ): Point.AsProtobufJSON {
    return {
      unitId: this.unitId,
      time: this.time,
      metricValues: this.metricValues
        ? Object.keys(this.metricValues).reduce(
            (r, k) => ({ ...r, [k]: this.metricValues![k] }),
            {}
          )
        : {}
    };
  }
}
export module Point {
  /**
   * Standard JavaScript object representation for Point
   */
  export interface AsObject {
    unitId: string;
    time: string;
    metricValues: { [prop: string]: number };
  }

  /**
   * Protobuf JSON representation for Point
   */
  export interface AsProtobufJSON {
    unitId: string;
    time: string;
    metricValues: { [prop: string]: number };
  }

  /**
   * Message implementation for unittracking.Point.MetricValuesEntry
   */
  export class MetricValuesEntry implements GrpcMessage {
    static id = 'unittracking.Point.MetricValuesEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new MetricValuesEntry();
      MetricValuesEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MetricValuesEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || 0;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: MetricValuesEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = _reader.readDouble();
            break;
          default:
            _reader.skipField();
        }
      }

      MetricValuesEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: MetricValuesEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeDouble(2, _instance.value);
      }
    }

    private _key: string;
    private _value: number;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MetricValuesEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<MetricValuesEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      MetricValuesEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): number {
      return this._value;
    }
    set value(value: number) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      MetricValuesEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MetricValuesEntry.AsObject {
      return {
        key: this.key,
        value: this.value
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
    ): MetricValuesEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module MetricValuesEntry {
    /**
     * Standard JavaScript object representation for MetricValuesEntry
     */
    export interface AsObject {
      key: string;
      value: number;
    }

    /**
     * Protobuf JSON representation for MetricValuesEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: number;
    }
  }
}

/**
 * Message implementation for unittracking.MetricsRequest
 */
export class MetricsRequest implements GrpcMessage {
  static id = 'unittracking.MetricsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MetricsRequest();
    MetricsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MetricsRequest) {
    _instance.language = _instance.language || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MetricsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.language = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    MetricsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MetricsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.language) {
      _writer.writeString(1, _instance.language);
    }
  }

  private _language: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MetricsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MetricsRequest.AsObject>) {
    _value = _value || {};
    this.language = _value.language;
    MetricsRequest.refineValues(this);
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MetricsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MetricsRequest.AsObject {
    return {
      language: this.language
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
  ): MetricsRequest.AsProtobufJSON {
    return {
      language: this.language
    };
  }
}
export module MetricsRequest {
  /**
   * Standard JavaScript object representation for MetricsRequest
   */
  export interface AsObject {
    language: string;
  }

  /**
   * Protobuf JSON representation for MetricsRequest
   */
  export interface AsProtobufJSON {
    language: string;
  }
}

/**
 * Message implementation for unittracking.MetricsResponse
 */
export class MetricsResponse implements GrpcMessage {
  static id = 'unittracking.MetricsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MetricsResponse();
    MetricsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MetricsResponse) {
    _instance.metrics = _instance.metrics || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MetricsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const msg_1 = {} as any;
          _reader.readMessage(
            msg_1,
            MetricsResponse.MetricsEntry.deserializeBinaryFromReader
          );
          _instance.metrics = _instance.metrics || {};
          _instance.metrics[msg_1.key] = msg_1.value;
          break;
        default:
          _reader.skipField();
      }
    }

    MetricsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MetricsResponse,
    _writer: BinaryWriter
  ) {
    if (!!_instance.metrics) {
      const keys_1 = Object.keys(_instance.metrics as any);

      if (keys_1.length) {
        const repeated_1 = keys_1
          .map(key => ({ key: key, value: (_instance.metrics as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          1,
          repeated_1,
          MetricsResponse.MetricsEntry.serializeBinaryToWriter
        );
      }
    }
  }

  private _metrics: { [prop: string]: Metric };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MetricsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<MetricsResponse.AsObject>) {
    _value = _value || {};
    (this.metrics = _value!.metrics
      ? Object.keys(_value!.metrics).reduce(
          (r, k) => ({
            ...r,
            [k]: _value!.metrics![k]
              ? new Metric(_value!.metrics![k])
              : undefined
          }),
          {}
        )
      : {}),
      MetricsResponse.refineValues(this);
  }
  get metrics(): { [prop: string]: Metric } {
    return this._metrics;
  }
  set metrics(value: { [prop: string]: Metric }) {
    this._metrics = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MetricsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MetricsResponse.AsObject {
    return {
      metrics: this.metrics
        ? Object.keys(this.metrics).reduce(
            (r, k) => ({
              ...r,
              [k]: this.metrics![k] ? this.metrics![k].toObject() : undefined
            }),
            {}
          )
        : {}
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
  ): MetricsResponse.AsProtobufJSON {
    return {
      metrics: this.metrics
        ? Object.keys(this.metrics).reduce(
            (r, k) => ({
              ...r,
              [k]: this.metrics![k] ? this.metrics![k].toJSON() : null
            }),
            {}
          )
        : {}
    };
  }
}
export module MetricsResponse {
  /**
   * Standard JavaScript object representation for MetricsResponse
   */
  export interface AsObject {
    metrics: { [prop: string]: Metric };
  }

  /**
   * Protobuf JSON representation for MetricsResponse
   */
  export interface AsProtobufJSON {
    metrics: { [prop: string]: Metric };
  }

  /**
   * Message implementation for unittracking.MetricsResponse.MetricsEntry
   */
  export class MetricsEntry implements GrpcMessage {
    static id = 'unittracking.MetricsResponse.MetricsEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new MetricsEntry();
      MetricsEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MetricsEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: MetricsEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = new Metric();
            _reader.readMessage(
              _instance.value,
              Metric.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      MetricsEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: MetricsEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeMessage(
          2,
          _instance.value as any,
          Metric.serializeBinaryToWriter
        );
      }
    }

    private _key: string;
    private _value?: Metric;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MetricsEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<MetricsEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value ? new Metric(_value.value) : undefined;
      MetricsEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): Metric | undefined {
      return this._value;
    }
    set value(value: Metric | undefined) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      MetricsEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MetricsEntry.AsObject {
      return {
        key: this.key,
        value: this.value ? this.value.toObject() : undefined
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
    ): MetricsEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value ? this.value.toProtobufJSON(options) : null
      };
    }
  }
  export module MetricsEntry {
    /**
     * Standard JavaScript object representation for MetricsEntry
     */
    export interface AsObject {
      key: string;
      value?: Metric.AsObject;
    }

    /**
     * Protobuf JSON representation for MetricsEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: Metric.AsProtobufJSON | null;
    }
  }
}

/**
 * Message implementation for unittracking.Metric
 */
export class Metric implements GrpcMessage {
  static id = 'unittracking.Metric';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Metric();
    Metric.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Metric) {
    _instance.title = _instance.title || '';
    _instance.icon = _instance.icon || '';
    _instance.format = _instance.format || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Metric, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 2:
          _instance.title = _reader.readString();
          break;
        case 3:
          _instance.icon = _reader.readString();
          break;
        case 4:
          _instance.format = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    Metric.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Metric, _writer: BinaryWriter) {
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.icon) {
      _writer.writeString(3, _instance.icon);
    }
    if (_instance.format) {
      _writer.writeEnum(4, _instance.format);
    }
  }

  private _title: string;
  private _icon: string;
  private _format: Format;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Metric to deeply clone from
   */
  constructor(_value?: RecursivePartial<Metric.AsObject>) {
    _value = _value || {};
    this.title = _value.title;
    this.icon = _value.icon;
    this.format = _value.format;
    Metric.refineValues(this);
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
  get format(): Format {
    return this._format;
  }
  set format(value: Format) {
    this._format = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Metric.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Metric.AsObject {
    return {
      title: this.title,
      icon: this.icon,
      format: this.format
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
  ): Metric.AsProtobufJSON {
    return {
      title: this.title,
      icon: this.icon,
      format:
        Format[
          this.format === null || this.format === undefined ? 0 : this.format
        ]
    };
  }
}
export module Metric {
  /**
   * Standard JavaScript object representation for Metric
   */
  export interface AsObject {
    title: string;
    icon: string;
    format: Format;
  }

  /**
   * Protobuf JSON representation for Metric
   */
  export interface AsProtobufJSON {
    title: string;
    icon: string;
    format: string;
  }
}
