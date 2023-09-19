class ProducerConsumer {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }

  async produce(message) {
    this.queue.push(message);
    if (!this.isProcessing) {
      await this.processQueue();
    }
  }

  async processQueue() {
    this.isProcessing = true;
    while (this.queue.length > 0) {
      const message = this.queue.shift();
      await this.consume(message);
    }
    this.isProcessing = false;
  }

  async consume(message) {
    return new Promise((resolve) => {
      // Simulate some asynchronous task
      setTimeout(() => {
        console.log("Consumed:", message);
        resolve();
      }, 1000);
    });
  }
}

// Example usage:
const producerConsumer = new ProducerConsumer();

async function test() {
  await producerConsumer.produce("Message 1");
  await producerConsumer.produce("Message 2");
  await producerConsumer.produce("Message 3");
}

test();
