import utils from '../node_modules/decentraland-ecs-utils/index'
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../0ee46c79-338c-445a-a506-ea26d80fbe46/src/item"
import Script2 from "../4c9fa249-97ec-4f32-8fb8-b96f69ba8892/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const teleport2 = new Entity('teleport2')
engine.addEntity(teleport2)
teleport2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(2.5, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
teleport2.addComponentOrReplace(transform3)

const ethermonball = new Entity('ethermonball')
engine.addEntity(ethermonball)
ethermonball.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(17.3, 1.5, 13.8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ethermonball.addComponentOrReplace(transform4)

//rotate
ethermonball.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 20, 0)))
const gltfShape2 = new GLTFShape("models/ethermonball.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
ethermonball.addComponentOrReplace(gltfShape2)

const raffskii = new Entity('raffskii')
engine.addEntity(raffskii)
raffskii.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(1, 3, 7.000000953674316),
  rotation: new Quaternion(-2.5977962626367885e-15, 1, -1.1920927533992653e-7, -1.4901161193847656e-8),
  scale: new Vector3(0.19507521390914917, 0.1875, 0.1875002384185791)
})
raffskii.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("models/raffskii.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
raffskii.addComponentOrReplace(gltfShape3)

const spark = new Entity('spark')
engine.addEntity(spark)
spark.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(11.643265724182129, 12.712251663208008, 9.283273696899414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark.addComponentOrReplace(transform6)

const etheremonhouseText = new Entity('etheremonhouseText')
engine.addEntity(etheremonhouseText)
etheremonhouseText.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(5, 12.5, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
etheremonhouseText.addComponentOrReplace(transform7)
const gltfShape4 = new GLTFShape("models/Etheremonhouse_text2.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
etheremonhouseText.addComponentOrReplace(gltfShape4)

const flowerCrop = new Entity('flowerCrop')
engine.addEntity(flowerCrop)
flowerCrop.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(8.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerCrop.addComponentOrReplace(transform8)
const gltfShape5 = new GLTFShape("models/FarmVegetation_03/FarmVegetation_03.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
flowerCrop.addComponentOrReplace(gltfShape5)

const balsamFlower = new Entity('balsamFlower')
engine.addEntity(balsamFlower)
balsamFlower.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(14.5, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
balsamFlower.addComponentOrReplace(transform9)
const gltfShape6 = new GLTFShape("models/Plant_02/Plant_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
balsamFlower.addComponentOrReplace(gltfShape6)

const javaFern = new Entity('javaFern')
engine.addEntity(javaFern)
javaFern.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(12.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern.addComponentOrReplace(transform10)
const gltfShape7 = new GLTFShape("models/Grass_01/Grass_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
javaFern.addComponentOrReplace(gltfShape7)

const javaFern2 = new Entity('javaFern2')
engine.addEntity(javaFern2)
javaFern2.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(4, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern2.addComponentOrReplace(transform11)
javaFern2.addComponentOrReplace(gltfShape7)

const javaFern3 = new Entity('javaFern3')
engine.addEntity(javaFern3)
javaFern3.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(0.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern3.addComponentOrReplace(transform12)
javaFern3.addComponentOrReplace(gltfShape7)

const javaFern4 = new Entity('javaFern4')
engine.addEntity(javaFern4)
javaFern4.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(14.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern4.addComponentOrReplace(transform13)
javaFern4.addComponentOrReplace(gltfShape7)

const javaFern5 = new Entity('javaFern5')
engine.addEntity(javaFern5)
javaFern5.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(1, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern5.addComponentOrReplace(transform14)
javaFern5.addComponentOrReplace(gltfShape7)

const javaFern6 = new Entity('javaFern6')
engine.addEntity(javaFern6)
javaFern6.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(15.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern6.addComponentOrReplace(transform15)
javaFern6.addComponentOrReplace(gltfShape7)

const javaFern7 = new Entity('javaFern7')
engine.addEntity(javaFern7)
javaFern7.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(4, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
javaFern7.addComponentOrReplace(transform16)
javaFern7.addComponentOrReplace(gltfShape7)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(teleport2, {"x":"88","y":"29","name":"Ethermon Hub"}, createChannel(channelId, teleport2, channelBus))
script2.spawn(spark, {"active":true}, createChannel(channelId, spark, channelBus))