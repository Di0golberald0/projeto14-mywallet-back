import db from '../db.js';

export async function transferAdded(req, res) {
  const { session, transfer } = res.locals;

  await db.collection('tranfers').insertOne({
      value: transfer.value,
      description: transfer.description,
      type: transfer.type,
      userId: session.userId,
      date: +new Date(),
    });

    res.sendStatus(201);
}

export async function transfersListed(req, res) {
  const { user } = res.locals;

  const transfers = await db.collection('tranfers').find({ userId: user._id }).toArray();

  const total = transfers.reduce((acc, curr) => {
      if (curr.type === 'saida') {
        return acc - curr.value;
      }
      return acc + curr.value;
    }, 0);

    transfers.push({
      type: 'total',
      value: total,
    });

    res.send(transfers);
}