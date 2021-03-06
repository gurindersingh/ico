export class BitmapInfoHeader {
  readonly size: 40
  readonly width: number
  readonly height: number
  readonly planes: number
  readonly bitCount: number
  readonly compression: number
  readonly sizeImage: number
  readonly xPelsPerMeter: number
  readonly yPelsPerMeter: number
  readonly clrUsed: number
  readonly clrImportant: number

  constructor(
    size: 40 = 40,
    width = 0,
    height = 0,
    planes = 0,
    bitCount = 0,
    compression = 0,
    sizeImage = 0,
    xPelsPerMeter = 0,
    yPelsPerMeter = 0,
    clrUsed = 0,
    clrImportant = 0
  ) {
    this.size = size
    this.width = width
    this.height = height
    this.planes = planes
    this.bitCount = bitCount
    this.compression = compression
    this.sizeImage = sizeImage
    this.xPelsPerMeter = xPelsPerMeter
    this.yPelsPerMeter = yPelsPerMeter
    this.clrUsed = clrUsed
    this.clrImportant = clrImportant
  }

  /**
   * Create bitmap info header from the buffer.
   * @param buffer The bitmap info header.
   */
  static from(buffer: Buffer): BitmapInfoHeader {
    const size = buffer.readUInt32LE(0) as 40
    const width = buffer.readInt32LE(4)
    const height = buffer.readInt32LE(8)
    const planes = buffer.readUInt16LE(12)
    const bitCount = buffer.readUInt16LE(14)
    const compression = buffer.readUInt32LE(16)
    const sizeImage = buffer.readUInt32LE(20)
    const xPelsPerMeter = buffer.readInt32LE(24)
    const yPelsPerMeter = buffer.readInt32LE(28)
    const clrUsed = buffer.readUInt32LE(32)
    const clrImportant = buffer.readUInt32LE(36)
    return new BitmapInfoHeader(
      size,
      width,
      height,
      planes,
      bitCount,
      compression,
      sizeImage,
      xPelsPerMeter,
      yPelsPerMeter,
      clrUsed,
      clrImportant
    )
  }

  get data(): Buffer {
    const buffer = Buffer.alloc(40)
    buffer.writeUInt32LE(this.size, 0)
    buffer.writeInt32LE(this.width, 4)
    buffer.writeInt32LE(this.height, 8)
    buffer.writeUInt16LE(this.planes, 12)
    buffer.writeUInt16LE(this.bitCount, 14)
    buffer.writeUInt32LE(this.compression, 16)
    buffer.writeUInt32LE(this.sizeImage, 20)
    buffer.writeInt32LE(this.xPelsPerMeter, 24)
    buffer.writeInt32LE(this.yPelsPerMeter, 28)
    buffer.writeUInt32LE(this.clrUsed, 32)
    buffer.writeUInt32LE(this.clrImportant, 36)
    return buffer
  }
}
