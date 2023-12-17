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
export enum AuthenticationResponseCode {
  AUTHENTICATION_RESPONSE_CODE_SUCCESS = 0,
  AUTHENTICATION_RESPONSE_CODE_ILLEGAL_IP = 1,
  AUTHENTICATION_RESPONSE_CODE_UNAUTHORIZED_TIME = 2,
  AUTHENTICATION_RESPONSE_CODE_ACTIVE_SESSION_LIMIT = 3,
  AUTHENTICATION_RESPONSE_CODE_INACTIVE_ACCOUNT = 4,
  AUTHENTICATION_RESPONSE_CODE_COMPANY_LICENSE_EXPIRED = 5
}
/**
 * Message implementation for userproto.SignInRequest
 */
export class SignInRequest implements GrpcMessage {
  static id = 'userproto.SignInRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SignInRequest();
    SignInRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SignInRequest) {
    _instance.email = _instance.email || '';
    _instance.password = _instance.password || '';
    _instance.serverAddress = _instance.serverAddress || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SignInRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.email = _reader.readString();
          break;
        case 2:
          _instance.password = _reader.readString();
          break;
        case 7:
          _instance.serverAddress = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SignInRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SignInRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.email) {
      _writer.writeString(1, _instance.email);
    }
    if (_instance.password) {
      _writer.writeString(2, _instance.password);
    }
    if (_instance.serverAddress) {
      _writer.writeString(7, _instance.serverAddress);
    }
  }

  private _email: string;
  private _password: string;
  private _serverAddress: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SignInRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SignInRequest.AsObject>) {
    _value = _value || {};
    this.email = _value.email;
    this.password = _value.password;
    this.serverAddress = _value.serverAddress;
    SignInRequest.refineValues(this);
  }
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }
  get serverAddress(): string {
    return this._serverAddress;
  }
  set serverAddress(value: string) {
    this._serverAddress = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SignInRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SignInRequest.AsObject {
    return {
      email: this.email,
      password: this.password,
      serverAddress: this.serverAddress
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
  ): SignInRequest.AsProtobufJSON {
    return {
      email: this.email,
      password: this.password,
      serverAddress: this.serverAddress
    };
  }
}
export module SignInRequest {
  /**
   * Standard JavaScript object representation for SignInRequest
   */
  export interface AsObject {
    email: string;
    password: string;
    serverAddress: string;
  }

  /**
   * Protobuf JSON representation for SignInRequest
   */
  export interface AsProtobufJSON {
    email: string;
    password: string;
    serverAddress: string;
  }
}

/**
 * Message implementation for userproto.SignInResponse
 */
export class SignInResponse implements GrpcMessage {
  static id = 'userproto.SignInResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SignInResponse();
    SignInResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SignInResponse) {
    _instance.token = _instance.token || '';
    _instance.responseCode = _instance.responseCode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SignInResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 2:
          _instance.token = _reader.readString();
          break;
        case 4:
          _instance.responseCode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    SignInResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SignInResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.token) {
      _writer.writeString(2, _instance.token);
    }
    if (_instance.responseCode) {
      _writer.writeEnum(4, _instance.responseCode);
    }
  }

  private _token: string;
  private _responseCode: AuthenticationResponseCode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SignInResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SignInResponse.AsObject>) {
    _value = _value || {};
    this.token = _value.token;
    this.responseCode = _value.responseCode;
    SignInResponse.refineValues(this);
  }
  get token(): string {
    return this._token;
  }
  set token(value: string) {
    this._token = value;
  }
  get responseCode(): AuthenticationResponseCode {
    return this._responseCode;
  }
  set responseCode(value: AuthenticationResponseCode) {
    this._responseCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SignInResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SignInResponse.AsObject {
    return {
      token: this.token,
      responseCode: this.responseCode
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
  ): SignInResponse.AsProtobufJSON {
    return {
      token: this.token,
      responseCode:
        AuthenticationResponseCode[
          this.responseCode === null || this.responseCode === undefined
            ? 0
            : this.responseCode
        ]
    };
  }
}
export module SignInResponse {
  /**
   * Standard JavaScript object representation for SignInResponse
   */
  export interface AsObject {
    token: string;
    responseCode: AuthenticationResponseCode;
  }

  /**
   * Protobuf JSON representation for SignInResponse
   */
  export interface AsProtobufJSON {
    token: string;
    responseCode: string;
  }
}
