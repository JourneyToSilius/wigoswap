import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  PairCreated,
  SetFeeTo,
  SetFeeToSetter
} from "../generated/UniswapV2Factory/UniswapV2Factory"

export function createPairCreatedEvent(
  token0: Address,
  token1: Address,
  pair: Address,
  param3: BigInt
): PairCreated {
  let pairCreatedEvent = changetype<PairCreated>(newMockEvent())

  pairCreatedEvent.parameters = new Array()

  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("param3", ethereum.Value.fromUnsignedBigInt(param3))
  )

  return pairCreatedEvent
}

export function createSetFeeToEvent(sender: Address, feeTo: Address): SetFeeTo {
  let setFeeToEvent = changetype<SetFeeTo>(newMockEvent())

  setFeeToEvent.parameters = new Array()

  setFeeToEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  setFeeToEvent.parameters.push(
    new ethereum.EventParam("feeTo", ethereum.Value.fromAddress(feeTo))
  )

  return setFeeToEvent
}

export function createSetFeeToSetterEvent(
  sender: Address,
  feeToSetter: Address
): SetFeeToSetter {
  let setFeeToSetterEvent = changetype<SetFeeToSetter>(newMockEvent())

  setFeeToSetterEvent.parameters = new Array()

  setFeeToSetterEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  setFeeToSetterEvent.parameters.push(
    new ethereum.EventParam(
      "feeToSetter",
      ethereum.Value.fromAddress(feeToSetter)
    )
  )

  return setFeeToSetterEvent
}
