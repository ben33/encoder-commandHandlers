import commandBus from './commandBus'
import { startEncoderHandler, selectVideoHandler } from './handlers'

commandBus
    .queue({ exclusive: false, key: 'startEncoder' })
    .consume((command, ack) => {
        startEncoderHandler.handle(command)
        ack()
    })

commandBus
    .queue({ exclusive: false, key: 'selectVideo' })
    .consume((command, ack) => {
        selectVideoHandler.handle(command)
        ack()
    })
