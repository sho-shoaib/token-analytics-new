/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Diesel,
  Diesel_MintEvent,
  Diesel_BurnEvent,
  Diesel_SwapEvent,
  Mira,
  Mira_BurnEvent,
  Mira_MintEvent,
  Mira_SwapEvent,
} from "generated";

Diesel.MintEvent.handler(async ({ event, context }) => {
  const entity: Diesel_MintEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    recipient: event.params.recipient.case,
    pool_id: event.params.pool_id.toString(),
    asset_0_in: event.params.asset_0_in,
    asset_1_in: event.params.asset_1_in,
    liquidity: event.params.liquidity.amount,
    hash: event.transaction.id,
  };

  context.Diesel_MintEvent.set(entity);
});

Diesel.BurnEvent.handler(async ({ event, context }) => {
  const entity: Diesel_BurnEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    recipient: event.params.recipient.case,
    pool_id: event.params.pool_id.toString(),
    asset_0_out: event.params.asset_0_out,
    asset_1_out: event.params.asset_1_out,
    liquidity: event.params.liquidity.amount,
    hash: event.transaction.id,
  };

  context.Diesel_BurnEvent.set(entity);
});

Diesel.SwapEvent.handler(async ({ event, context }) => {
  const entity: Diesel_SwapEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    recipient: event.params.recipient.case,
    pool_id: event.params.pool_id.toString(),
    asset_0_out: event.params.asset_0_out,
    asset_1_out: event.params.asset_1_out,
    asset_0_in: event.params.asset_0_in,
    asset_1_in: event.params.asset_1_in,
    hash: event.transaction.id,
  };

  context.Diesel_SwapEvent.set(entity);
});

Mira.BurnEvent.handler(async ({ event, context }) => {
  const entity: Mira_BurnEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    recipient: event.params.recipient.case,
    pool_id: event.params.pool_id.toString(),
    asset_0_out: event.params.asset_0_out,
    asset_1_out: event.params.asset_1_out,
    liquidity: event.params.liquidity.amount,
    hash: event.transaction.id,
  };

  context.Mira_BurnEvent.set(entity);
});

Mira.MintEvent.handler(async ({ event, context }) => {
  const entity: Mira_MintEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    recipient: event.params.recipient.case,
    pool_id: event.params.pool_id.toString(),
    asset_0_in: event.params.asset_0_in,
    asset_1_in: event.params.asset_1_in,
    liquidity: event.params.liquidity.amount,
    hash: event.transaction.id,
  };

  context.Mira_MintEvent.set(entity);
});

Mira.SwapEvent.handler(async ({ event, context }) => {
  const entity: Mira_SwapEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    recipient: event.params.recipient.case,
    pool_id: event.params.pool_id.toString(),
    asset_0_out: event.params.asset_0_out,
    asset_1_out: event.params.asset_1_out,
    asset_0_in: event.params.asset_0_in,
    asset_1_in: event.params.asset_1_in,
    hash: event.transaction.id,
  };

  context.Mira_SwapEvent.set(entity);
});
