using MassTransit;
using OrderService.Models; 

namespace OrderService.Messaging
{
    public class OrderPublisher
    {
        private readonly IPublishEndpoint _endPoint;

        public OrderPublisher(IPublishEndpoint endPoint)
        {
            _endPoint = endPoint;
        }

        public async Task PublishOrderAsync(Order order)
        {
            await _endPoint.Publish<Order>(order);
        }
    }
}
