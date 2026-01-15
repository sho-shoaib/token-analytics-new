import assert from "assert";
import { 
  TestHelpers,
  Diesel_MintEvent
} from "generated";
const { MockDb, Diesel } = TestHelpers;

describe("Diesel contract MintEvent event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Diesel contract MintEvent event
  const event = Diesel.MintEvent.mock({data: {} /* It mocks event fields with default values, so you only need to provide data */});

  it("Diesel_MintEvent is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Diesel.MintEvent.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualDieselMintEvent = mockDbUpdated.entities.Diesel_MintEvent.get(
      `${event.chainId}_${event.block.height}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedDieselMintEvent: Diesel_MintEvent = {
      id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualDieselMintEvent, expectedDieselMintEvent, "Actual DieselMintEvent should be the same as the expectedDieselMintEvent");
  });
});
