import {
  ChangeBasePlate as ChangeBasePlateEvent,
  ChangePhilandOwner as ChangePhilandOwnerEvent,
  ChangeWallPaper as ChangeWallPaperEvent,
  CreatedMap as CreatedMapEvent,
  DepositSuccess as DepositSuccessEvent,
  Initialized as InitializedEvent,
  MapInitialization as MapInitializationEvent,
  MapLockStatusChange as MapLockStatusChangeEvent,
  RemoveLink as RemoveLinkEvent,
  RemoveObject as RemoveObjectEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Save as SaveEvent,
  WhitelistGranted as WhitelistGrantedEvent,
  WhitelistRemoved as WhitelistRemovedEvent,
  WithdrawSuccess as WithdrawSuccessEvent,
  WriteLink as WriteLinkEvent,
  WriteObject as WriteObjectEvent
} from "../generated/Contract/Contract"
import {
  ChangeBasePlate,
  ChangePhilandOwner,
  ChangeWallPaper,
  CreatedMap,
  DepositSuccess,
  Initialized,
  MapInitialization,
  MapLockStatusChange,
  RemoveLink,
  RemoveObject,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Save,
  WhitelistGranted,
  WhitelistRemoved,
  WithdrawSuccess,
  WriteLink,
  WriteObject
} from "../generated/schema"

export function handleChangeBasePlate(event: ChangeBasePlateEvent): void {
  let entity = new ChangeBasePlate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.name = event.params.name
  entity.contractAddress = event.params.contractAddress
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleChangePhilandOwner(event: ChangePhilandOwnerEvent): void {
  let entity = new ChangePhilandOwner(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.name = event.params.name
  entity.sender = event.params.sender
  entity.save()
}

export function handleChangeWallPaper(event: ChangeWallPaperEvent): void {
  let entity = new ChangeWallPaper(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.name = event.params.name
  entity.contractAddress = event.params.contractAddress
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleCreatedMap(event: CreatedMapEvent): void {
  let entity = new CreatedMap(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.name = event.params.name
  entity.sender = event.params.sender
  entity.numberOfLand = event.params.numberOfLand
  entity.save()
}

export function handleDepositSuccess(event: DepositSuccessEvent): void {
  let entity = new DepositSuccess(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.name = event.params.name
  entity.contractAddress = event.params.contractAddress
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleMapInitialization(event: MapInitializationEvent): void {
  let entity = new MapInitialization(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.iname = event.params.iname
  entity.sender = event.params.sender
  entity.save()
}

export function handleMapLockStatusChange(
  event: MapLockStatusChangeEvent
): void {
  let entity = new MapLockStatusChange(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleRemoveLink(event: RemoveLinkEvent): void {
  let entity = new RemoveLink(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.name = event.params.name
  entity.index = event.params.index
  entity.save()
}

export function handleRemoveObject(event: RemoveObjectEvent): void {
  let entity = new RemoveObject(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.name = event.params.name
  entity.index = event.params.index
  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleSave(event: SaveEvent): void {
  let entity = new Save(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.name = event.params.name
  entity.sender = event.params.sender
  entity.save()
}

export function handleWhitelistGranted(event: WhitelistGrantedEvent): void {
  let entity = new WhitelistGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.operator = event.params.operator
  entity.target = event.params.target
  entity.save()
}

export function handleWhitelistRemoved(event: WhitelistRemovedEvent): void {
  let entity = new WhitelistRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.operator = event.params.operator
  entity.target = event.params.target
  entity.save()
}

export function handleWithdrawSuccess(event: WithdrawSuccessEvent): void {
  let entity = new WithdrawSuccess(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.name = event.params.name
  entity.contractAddress = event.params.contractAddress
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.save()
}

export function handleWriteLink(event: WriteLinkEvent): void {
  let entity = new WriteLink(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.name = event.params.name
  entity.contractAddress = event.params.contractAddress
  entity.tokenId = event.params.tokenId
  entity.title = event.params.title
  entity.url = event.params.url
  entity.data = event.params.data
  entity.save()
}

export function handleWriteObject(event: WriteObjectEvent): void {
  let entity = new WriteObject(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.name = event.params.name
  entity.contractAddress = event.params.contractAddress
  entity.tokenId = event.params.tokenId
  entity.xStart = event.params.xStart
  entity.yStart = event.params.yStart
  entity.save()
}
