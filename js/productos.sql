CREATE DATABASE  IF NOT EXISTS `productos` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `productos`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: productos
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `api`
--

DROP TABLE IF EXISTS `api`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api` (
  `id` int NOT NULL,
  `carta` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `significado` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `imagen` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `precio` double NOT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api`
--

LOCK TABLES `api` WRITE;
/*!40000 ALTER TABLE `api` DISABLE KEYS */;
INSERT INTO `api` VALUES (0,'El Loco','Libertad, búsqueda de nuevas experiencias y espontaneidad. Simboliza el inicio de un ciclo nuevo, la confianza en el proceso y la valentía con la que te embarcas en un viaje desconocido.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/0-Fool.png',20,1),(1,'El Mago','Poder creativo y personal. Es el primer arcano de la jerarquía y, por lo tanto, es el primer paso en la búsqueda de la sabiduría. Esta carta representa el alma del deseo, el primer escalón que debemos subir en busca de la autorrealización.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/1-Magician.png',20,1),(2,'La Sacerdotisa','Conexión con el mundo espiritual y la energía femenina. Representa la intuición, la sabiduría interior y el conocimiento oculto. Además, se la relaciona con la capacidad de alcanzar objetivos y convertir en realidad deseos que parecían imposibles.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/2-HighPriestess.png',20,1),(3,'La Emperatriz','Fertilidad, abundancia y amor maternal. Simboliza la creatividad, el éxito creativo y la belleza. Encarna el arquetipo de la madre tierra, por lo que se la relaciona con el atractivo femenino. Es la personificación del poder femenino.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/3-Empress.png',20,1),(4,'El Emperador','Autoridad, estructura y liderazgo. Es la carta que simboliza el poder masculino, la protección y la estabilidad. Además, es un arquetipo de sabiduría antigua.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/4-Emperor.png',20,1),(5,'El Sumo Sacerdote','Espiritualidad, tradición y conocimiento. Representa la memoria, la guía espiritual y la conexión con lo divino. Es el arquetipo de la sabiduría y la pureza del alma.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/5-Hierophant.png',20,1),(6,'Los Enamorados','El amor, la elección y la armonía en las relaciones. Es la representación de la toma de decisiones y la unión espiritual. Esta carta personifica el deseo más allá de la razón.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/6-Lovers.png',20,1),(7,'El Carro','Éxito, avance y control. Representa la determinación para superar obstáculos y el logro de metas. Es el arquetipo del héroe, capaz de imponer su voluntad sobre el deseo.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/7-Chariot.png',20,1),(8,'La Fuerza','Fuerza interior, coraje y dominio de los impulsos. Simboliza la valentía, la compasión y la superación de obstáculos a través del amor. Su poder proviene del coraje. Es la cualidad que necesita el hombre para domesticar el ansia de poder.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/8-Strength.png',20,1),(9,'El Ermitaño','Autorreflexión, sabiduría interna y la búsqueda de respuestas. Es un símbolo de soledad voluntaria y guía interior. Se le relaciona con el Dios del tiempo, Saturno, por lo que se le retrata como un hombre viejo.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/9-Hermit.png',20,1),(10,'La Rueda de la Fortuna','Cambio, destino y oportunidades. Simboliza los ciclos de la vida y los cambios en la suerte. Es la encarnación de la indiferencia, inabordable por los destinos de quienes la rodean.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/10-WheelFortune.png',20,1),(11,'La Justicia','Equidad, equilibrio y honestidad. Simboliza la toma de decisiones justas, la legalidad y la responsabilidad personal. Esta carta representa la defensa de lo que es justo y equitativo.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/11-Justice.png',20,1),(12,'El Colgado','Entrega, renuncia y suspensión. Representa la necesidad de hacer sacrificios, ver las cosas desde una perspectiva diferente y aceptar la espera. Esta carta está relacionada con el dolor y la pérdida del ego que el alma necesita para completar su búsqueda espiritual.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/12-HangedMan.png',20,1),(13,'La Muerte','Cambio, transformación y renacimiento. No representa muerte literal. Es más bien la señal del final de una etapa y el comienzo de otra. Con ella debemos saber que no todo está perdido, quedan otras muchas cartas en la baraja.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/13-Death.png',20,1),(14,'La Templanza','Armonía, equilibrio y moderación. Simboliza la combinación de distintos elementos en la vida, y la búsqueda de la serenidad interior. Esta carta no nos pide que neguemos nuestras emociones ni apetitos, sino que los mantengamos bajo control.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/14-Temperance.png',20,1),(15,'El Diablo','Tentación, adicciones o cadenas autoimpuestas. Representa las fuerzas oscuras internas y la necesidad de liberarse de las limitaciones autoimpuestas. Es un recordatorio del dolor que espera a quienes no consiguen librarse de su vinculación a los deseos terrenales.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/15-Devil.png',20,1),(16,'La Torre','Cambio repentino, destrucción y revelación. Simboliza la demolición de estructuras falsas que permiten un renacimiento y un crecimiento real. Todo lo material es temporal, eso es lo que viene a recordarnos este arcano mayor.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/16-Tower.png',20,1),(17,'La Estrella','Esperanza, inspiración e iluminación. Es la representación de la conexión con el universo, la fe en el futuro y la guía divina. Esta carta inicia el ascenso místico del alma a través de los cuerpos celestes, en búsqueda de iluminación espiritual.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/17-Star.png',20,1),(18,'La Luna','Ciclos emocionales, imaginación e ilusiones. Representa aspectos emocionales, los sueños y la intuición. Simboliza el mundo de lo intuitivo y lo instintivo, así como la fluctuación de las emociones.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/18-Moon.png',20,1),(19,'El Sol','Vitalidad, energía y alegría. Simboliza la claridad, la abundancia y el éxito. Junto a la Luna, este arcano representa la fusión de la mente consciente y la mente inconsciente.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/19-Sun.png',25,1),(20,'El Juicio','Renovación, resurrección y evaluación. Simboliza el llamado a la transformación y la toma de decisiones que están basadas en la sabiduría que se ha adquirido.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/20-Judgement.png',20,1),(21,'El Mundo','Culminación, integración y la realización. Representa el logro de metas, la totalidad y la armonía con el universo. Esta carta también es un símbolo de la iluminación de la eternidad.','https://raw.githubusercontent.com/WingedMenace/wingedmenace.github.io/main/img/21-World.png',20,1);
/*!40000 ALTER TABLE `api` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-26 23:53:14
