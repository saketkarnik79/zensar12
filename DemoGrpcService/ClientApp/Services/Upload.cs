using DemoGrpcService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Grpc.Core;

namespace ClientApp.Services
{
    internal class Upload: UploadService.UploadServiceBase
    {
        public override async Task<UploadStatus> UploadData(IAsyncStreamReader<DataChunk> requestStream, ServerCallContext context)
        {
            int totalBytesReceived = 0;
            await foreach (var chunk in requestStream.ReadAllAsync())
            {
                // Process each chunk (e.g., save to disk, database, etc.)
                totalBytesReceived += chunk.Content.Length;
            }
            return new UploadStatus
            {
               
                Message = $"Data upload completed. Total bytes received: {totalBytesReceived}"
            };
        }
    }
}
