using API_DemoBasics2.Repositories;

namespace API_DemoBasics2.UnitOfWork
{
    public interface IUnitOfWork: IDisposable
    {
        IProductRepository Products { get; }
        Task<int> CommitChangesAsync();
    }
}
