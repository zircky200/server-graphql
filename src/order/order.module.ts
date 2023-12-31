import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderResolver } from './order.resolver'

@Module({
	providers: [OrderResolver, OrderService],
	imports: []
})
export class OrderModule {}
