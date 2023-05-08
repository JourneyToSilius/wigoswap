import {
  PairCreated as PairCreatedEvent,
  SetFeeTo as SetFeeToEvent,
  SetFeeToSetter as SetFeeToSetterEvent
} from "../generated/UniswapV2Factory/UniswapV2Factory"
import { PairCreated, SetFeeTo, SetFeeToSetter } from "../generated/schema"

export function handlePairCreated(event: PairCreatedEvent): void {
  let entity = new PairCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token0 = event.params.token0
  entity.token1 = event.params.token1
  entity.pair = event.params.pair
  entity.param3 = event.params.param3

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFeeTo(event: SetFeeToEvent): void {
  let entity = new SetFeeTo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.feeTo = event.params.feeTo

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFeeToSetter(event: SetFeeToSetterEvent): void {
  let entity = new SetFeeToSetter(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.feeToSetter = event.params.feeToSetter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
