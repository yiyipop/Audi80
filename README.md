import React, { useState } from 'react'
import { Button } from "/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card"
import { Heart, Plus, Minus } from "lucide-react"

type BodyStyle = {
  id: string
  name: string
  history: string
  description: string
  characteristics: string
  engines: string[]
  image: string
  years: string
}

const bodyStyles: BodyStyle[] = [
  {
    id: 'b1',
    name: 'B1',
    history: `Модель Audi 80 B1 была представлена в 1965 году как значимая модель в истории Audi. Это был компактный седан, который стал основой для будущих моделей Audi. B1 имел стильный дизайн и был оснащен различными двигателями, включая 1.6-литровый инлайн-четырехцилиндровый и 2.0-литровый инлайн-четырехцилиндровый. Модель была известна своей надежностью и доступностью, что делало ее популярным выбором среди потребителей. B1 также представил несколько инновационных решений для своего времени, таких как переднепривод и современный интерьер.`,
    description: `Audi 80 B1 был компактным седаном, который сочетал в себе стиль и практичность. У него был стильный и современный дизайн, с переднеприводом, обеспечивающим отличную управляемость и экономичность топлива. B1 был доступен с различными двигателями, включая 1.6-литровый и 2.0-литровый инлайн-четырехцилиндровые, обеспечивая баланс мощности и экономичности. Интерьер был хорошо спроектирован, с удобными сиденьями и современными удобствами. B1 был значимым шагом для Audi, устанавливая основу для будущего успеха бренда.`,
    characteristics: `4 двери, переднепривод, разгон до 100 км/ч за 10-12 секунд, ручная или автоматическая коробка передач`,
    engines: ['ABC', 'DEF'],
    image: 'https://avatars.mds.yandex.net/i?id=73c48dcb2144f0e2843fe8b2e6ce51288a7d164a-10151263-images-thumbs&n=13',
    years: '1965-1972 🚗💨'
  },
  {
    id: 'b2',
    name: 'B2',
    history: `Модель Audi 80 B2 была представлена в 1972 году как преемник модели B1. Она имела более современный дизайн и улучшенную производительность. B2 была оснащена различными двигателями, включая 1.8-литровый и 2.0-литровый инлайн-четырехцилиндровые. Модель была известна улучшенной управляемостью и более роскошным интерьером. B2 также представила несколько новых решений, таких как гидравлическая стабилизация и электронная система управления, улучшая вождение. B2 была значительным улучшением по сравнению с B1, предлагая лучшую производительн��сть и комфорт.`,
    description: `Audi 80 B2 была более современной и роскошной моделью по сравнению с предыдущей. У нее был более современный и аэродинамичный дизайн, с улучшенной управляемостью и более комфортным интерьером. B2 была доступна с различными двигателями, включая 1.8-литровый и 2.0-литровый инлайн-четырехцилиндровые, обеспечивая лучшую производительность и экономичность топлива. Интерьер был оснащен современными удобствами, такими как гидравлическая стабилизация и электронная система управления, обеспечивая более комфортное и приятное вождение. B2 была значительным шагом для Audi, предлагая лучшую производительность и комфорт.`,
    characteristics: `4 двери, переднепривод, разгон до 100 км/ч за 9-11 секунд, ручная или автоматическая коробка передач`,
    engines: ['GHI', 'JKL'],
    image: 'https://avatars.mds.yandex.net/i?id=d70a249a0a05be87bb951d3740d0051cdcf3705c-10698872-images-thumbs&n=13',
    years: '1972-1979 🚗💨'
  },
  {
    id: 'b3',
    name: 'B3',
    history: `Модель Audi 80 B3 была представлена в 1979 году как значительный редизайн модели B2. Она имела более современный и аэродинамичный дизайн, улучшенную производительность и более роскошный интерьер. B3 была оснащена различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые. Модель была известна улучшенной управляемостью и более роскошным интерьером. B3 также представила несколько новых решений, таких как электронная система управления и антиблокировка тормозов, улучшая вождение. B3 была значительным улучшением по сравнению с B2, предлагая лучшую производительность и комфорт.`,
    description: `Audi 80 B3 была значительным редизайном модели B2, с более современным и аэродинамичным дизайном. Она предлагала улучшенную производительность и более роскошный интерьер, с различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые. B3 была доступна с современными удобствами, такими как электронная система управления и антиблокировка тормозов, обеспечивая более комфортное и приятное вождение. B3 была значительным шагом для Audi, предлагая лучшую производительность и комфорт.`,
    characteristics: `4 двери, переднепривод, разгон до 100 км/ч за 8-10 секунд, ручная или автоматическая коробка передач`,
    engines: ['MNO', 'PQR', 'STU'],
    image: 'https://avatars.mds.yandex.net/i?id=6d71ba07a9f1163789f91b4b8e69b009a60444fd-7052560-images-thumbs&n=13',
    years: '1979-1986 🚗💨'
  },
  {
    id: 'b4',
    name: 'B4',
    history: `Модель Audi 80 B4 была представлена в 1986 году как значительный редизайн модели B3. Она имела более современный и аэродинамичный дизайн, улучшенную производительность и более роскошный интерьер. B4 была оснащена различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые. Модель была известна улучшенной управляемостью и более роскошным интерьером. B4 также представила несколько новых решений, таких как электронная система управления и антиблокировка тормозов, улучшая вождение. B4 была значительным улучшением по сравнению с B3, предлагая лучшую производительность и комфорт.`,
    description: `Audi 80 B4 была значительным редизайном модели B3, с более современным и аэродинамичным дизайном. Она предлагала улучшенную производительность и более роскошный интерьер, с различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые. B4 была доступна с современными удобствами, такими как электронная система управления и антиблокировка тормозов, обеспечивая более комфортное и приятное вождение. B4 была значительным шагом для Audi, предлагая лучшую производительность и комфорт.`,
    characteristics: `4 двери, переднепривод, разгон до 100 км/ч за 7-9 секунд, ручная или автоматическая коробка передач`,
    engines: ['VWX', 'YZA', 'BCD'],
    image: 'https://avatars.mds.yandex.net/get-entity_search/371114/881927409/SUx150_2x',
    years: '1986-1996 🚗💨'
  }
]

export default function Audi80Showcase() {
  const [comparisonBodyStyles, setComparisonBodyStyles] = useState<BodyStyle[]>([])
  const [expandedBodyStyle, setExpandedBodyStyle] = useState<string | null>(null)

  const handleAddToComparison = (bodyStyle: BodyStyle) => {
    if (!comparisonBodyStyles.includes(bodyStyle) && comparisonBodyStyles.length < 3) {
      setComparisonBodyStyles([...comparisonBodyStyles, bodyStyle])
    }
  }

  const handleRemoveFromComparison = (bodyStyle: BodyStyle) => {
    setComparisonBodyStyles(comparisonBodyStyles.filter(bs => bs.id !== bodyStyle.id))
  }

  const toggleDetails = (id: string) => {
    setExpandedBodyStyle(expandedBodyStyle === id ? null : id)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-100 to-blue-100">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-orange-300 to-blue-300">
        <a className="flex items-center justify-center" href="#">
          <Heart className="h-6 w-6 text-white" />
          <span className="sr-only">Audi 80 Showcase</span>
        </a>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-orange-600">
                  Ист��рия модели Audi 80
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Откройте для себя различные кузовы итоговой модели Audi 80.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-100 to-blue-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-orange-600">Выберите кузов для сравнения</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {bodyStyles.map(bodyStyle => (
                <Card key={bodyStyle.id} className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white cursor-pointer hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <img src={bodyStyle.image} alt={bodyStyle.name} className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-xl font-bold">{bodyStyle.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{bodyStyle.years}</p>
                    <Button variant="outline" onClick={() => handleAddToComparison(bodyStyle)}>
                      Добавить к сравнению
                    </Button>
                    <Button variant="outline" onClick={() => toggleDetails(bodyStyle.id)}>
                      Подробнее
                    </Button>
                    {expandedBodyStyle === bodyStyle.id && (
                      <div className="mt-4 space-y-4">
                        <CardHeader>
                          <CardTitle>История</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{bodyStyle.history}</CardDescription>
                        </CardContent>
                        <CardHeader>
                          <CardTitle>Описание</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{bodyStyle.description}</CardDescription>
                        </CardContent>
                        <CardHeader>
                          <CardTitle>Характеристики</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>
                            {bodyStyle.characteristics}
                            <br />
                            <strong>Доступные моторы:</strong> {bodyStyle.engines.join(', ')}
                          </CardDescription>
                        </CardContent>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {comparisonBodyStyles.length > 0 && (
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-100 to-blue-100">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-orange-600">Сравнение кузовов</h2>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {comparisonBodyStyles.map(bodyStyle => (
                  <div key={bodyStyle.id} className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
                      <p className="text-white font-bold">{bodyStyle.name}</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleRemoveFromComparison(bodyStyle)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 bg-orange-100 dark:bg-gray-700 text-left text-orange-600">Характеристика</th>
                      {comparisonBodyStyles.map(bodyStyle => (
                        <th key={bodyStyle.id} className="p-4 bg-orange-100 dark:bg-gray-700 text-left text-orange-600">{bodyStyle.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4">Разгон до 100 км/ч</td>
                      {comparisonBodyStyles.map(bodyStyle => (
                        <td key={bodyStyle.id} className="p-4 text-gray-600 dark:text-gray-400">
                          {bodyStyle.characteristics.split(', ')[0].split('за ')[1]}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4">Коробка передач</td>
                      {comparisonBodyStyles.map(bodyStyle => (
                        <td key={bodyStyle.id} className="p-4 text-gray-600 dark:text-gray-400">
                          {bodyStyle.characteristics.split(', ')[1]}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4">Доступные моторы</td>
                      {comparisonBodyStyles.map(bodyStyle => (
                        <td key={bodyStyle.id} className="p-4 text-gray-600 dark:text-gray-400">
                          {bodyStyle.engines.join(', ')}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-orange-300 to-blue-300">
        <p className="text-xs text-white">© 2023 Шоука Audi 80. Все права защищены.</p>
      </footer>
    </div>
  )
} import React, { useState } from 'react'
import { Button } from "/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card"
import { Heart, Plus, Minus } from "lucide-react"

type BodyStyle = {
  id: string
  name: string
  history: string
  description: string
  characteristics: string
  engines: string[]
  image: string
  years: string
}

const bodyStyles: BodyStyle[] = [
  {
    id: 'b1',
    name: 'B1',
    history: `Модель Audi 80 B1 была представлена в 1965 году как значимая модель в истории Audi. Это был компактный седан, который стал основой для будущих моделей Audi. B1 имел стильный дизайн и был оснащен различными двигателями, включая 1.6-литровый инлайн-четырехцилиндровый и 2.0-литровый инлайн-четырехцилиндровый. Модель была известна своей надежностью и доступностью, что делало ее популярным выбором среди потребителей. B1 также представил несколько инновационных решений для своего времени, таких как переднепривод и современный интерьер.`,
    description: `Audi 80 B1 был компактным седаном, который сочетал в себе стиль и практичность. У него был стильный и современный дизайн, с переднеприводом, обеспечивающим отличную управляемость и экономичность топлива. B1 был доступен с различными двигателями, включая 1.6-литровый и 2.0-литровый инлайн-четырехцилиндровые, обеспечивая баланс мощности и экономичности. Интерьер был хорошо спроектирован, с удобными сиденьями и современными удобствами. B1 был значимым шагом для Audi, устанавливая основу для будущего успеха бренда.`,
    characteristics: `4 двери, переднепривод, разгон до 100 км/ч за 10-12 секунд, ручная или автоматическая коробка передач`,
    engines: ['ABC', 'DEF'],
    image: 'https://avatars.mds.yandex.net/i?id=73c48dcb2144f0e2843fe8b2e6ce51288a7d164a-10151263-images-thumbs&n=13',
    years: '1965-1972 🚗💨'
  },
  {
    id: 'b2',
    name: 'B2',
    history: `Модель Audi 80 B2 была представлена в 1972 году как преемник модели B1. Она имела более современный дизайн и улучшенную производительность. B2 была оснащена различными двигателями, включая 1.8-литровый и 2.0-литровый инлайн-четырехцилиндровые. Модель была известна улучшенной управляемостью и более роскошным интерьером. B2 также представила несколько новых решений, таких как гидравлическая стабилизация и электронная система управления, улучшая вождение. B2 была значительным улучшением по сравнению с B1, предлагая лучшую производительн��сть и комфорт.`,
    description: `Audi 80 B2 была более современной и роскошной моделью по сравнению с предыдущей. У нее был более современный и аэродинамичный дизайн, с улучшенной управляемостью и более комфортным интерьером. B2 была доступна с различными двигателями, включая 1.8-литровый и 2.0-литровый инлайн-четырехцилиндровые, обеспечивая лучшую производительность и экономичность топлива. Интерьер был оснащен современными удобствами, такими как гидравлическая стабилизация и электронная система управления, обеспечивая более комфортное и приятное вождение. B2 была значительным шагом для Audi, предлагая лучшую производительность и комфорт.`,
    characteristics: `4 двери, переднепривод, разгон до 100 км/ч за 9-11 секунд, ручная или автоматическая коробка передач`,
    engines: ['GHI', 'JKL'],
    image: 'https://avatars.mds.yandex.net/i?id=d70a249a0a05be87bb951d3740d0051cdcf3705c-10698872-images-thumbs&n=13',
    years: '1972-1979 🚗💨'
  },
  {
    id: 'b3',
    name: 'B3',
    history: `Модель Audi 80 B3 была представлена в 1979 году как значительный редизайн модели B2. Она имела более современный и аэродинамичный дизайн, улучшенную производительность и более роскошный интерьер. B3 была оснащена различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые. Модель была известна улучшенной управляемостью и более роскошным интерьером. B3 также представила несколько новых решений, таких как электронная система управления и антиблокировка тормозов, улучшая вождение. B3 была значительным улучшением по сравнению с B2, предлагая лучшую производительность и комфорт.`,
    description: `Audi 80 B3 была значительным редизайном модели B2, с более современным и аэродинамичным дизайном. Она предлагала улучшенную производительность и более роскошный интерьер, с различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые. B3 была доступна с современными удобствами, такими как электронная система управления и антиблокировка тормозов, обеспечивая более комфортное и приятное вождение. B3 была значительным шагом для Audi, предлагая лучшую производительность и комфорт.`,
    characteristics: `4 двери, переднепривод, разгон до 100 км/ч за 8-10 секунд, ручная или автоматическая коробка передач`,
    engines: ['MNO', 'PQR', 'STU'],
    image: 'https://avatars.mds.yandex.net/i?id=6d71ba07a9f1163789f91b4b8e69b009a60444fd-7052560-images-thumbs&n=13',
    years: '1979-1986 🚗💨'
  },
  {
    id: 'b4',
    name: 'B4',
    history: `Модель Audi 80 B4 была представлена в 1986 году как значительный редизайн модели B3. Она имела более современный и аэродинамичный дизайн, улучшенную производительность и более роскошный интерьер. B4 была оснащена различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые. Модель была известна улучшенной управляемостью и более роскошным интерьером. B4 также представила несколько новых решений, таких как электронная система управления и антиблокировка тормозов, улучшая вождение. B4 была значительным улучшением по сравнению с B3, предлагая лучшую производительность и комфорт.`,
    description: `Audi 80 B4 была значительным редизайном модели B3, с более современным и аэродинамичным дизайном. Она предлагала улучшенную производительность и более роскошный интерьер, с различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые. B4 была доступна с современными удобствами, такими как электронная система управления и антиблокировка тормозов, обеспечивая более комфортное и приятное вождение. B4 была значительным шагом для Audi, предлагая лучшую производительность и комфорт.`,
    characteristics: `4 двери, переднепривод, разгон до 100 км/ч за 7-9 секунд, ручная или автоматическая коробка передач`,
    engines: ['VWX', 'YZA', 'BCD'],
    image: 'https://avatars.mds.yandex.net/get-entity_search/371114/881927409/SUx150_2x',
    years: '1986-1996 🚗💨'
  }
]

export default function Audi80Showcase() {
  const [comparisonBodyStyles, setComparisonBodyStyles] = useState<BodyStyle[]>([])
  const [expandedBodyStyle, setExpandedBodyStyle] = useState<string | null>(null)

  const handleAddToComparison = (bodyStyle: BodyStyle) => {
    if (!comparisonBodyStyles.includes(bodyStyle) && comparisonBodyStyles.length < 3) {
      setComparisonBodyStyles([...comparisonBodyStyles, bodyStyle])
    }
  }

  const handleRemoveFromComparison = (bodyStyle: BodyStyle) => {
    setComparisonBodyStyles(comparisonBodyStyles.filter(bs => bs.id !== bodyStyle.id))
  }

  const toggleDetails = (id: string) => {
    setExpandedBodyStyle(expandedBodyStyle === id ? null : id)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-100 to-blue-100">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-orange-300 to-blue-300">
        <a className="flex items-center justify-center" href="#">
          <Heart className="h-6 w-6 text-white" />
          <span className="sr-only">Audi 80 Showcase</span>
        </a>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-orange-600">
                  Ист��рия модели Audi 80
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Откройте для себя различные кузовы итоговой модели Audi 80.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-100 to-blue-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-orange-600">Выберите кузов для сравнения</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {bodyStyles.map(bodyStyle => (
                <Card key={bodyStyle.id} className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white cursor-pointer hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <img src={bodyStyle.image} alt={bodyStyle.name} className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-xl font-bold">{bodyStyle.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{bodyStyle.years}</p>
                    <Button variant="outline" onClick={() => handleAddToComparison(bodyStyle)}>
                      Добавить к сравнению
                    </Button>
                    <Button variant="outline" onClick={() => toggleDetails(bodyStyle.id)}>
                      Подробнее
                    </Button>
                    {expandedBodyStyle === bodyStyle.id && (
                      <div className="mt-4 space-y-4">
                        <CardHeader>
                          <CardTitle>История</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{bodyStyle.history}</CardDescription>
                        </CardContent>
                        <CardHeader>
                          <CardTitle>Описание</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{bodyStyle.description}</CardDescription>
                        </CardContent>
                        <CardHeader>
                          <CardTitle>Характеристики</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>
                            {bodyStyle.characteristics}
                            <br />
                            <strong>Доступные моторы:</strong> {bodyStyle.engines.join(', ')}
                          </CardDescription>
                        </CardContent>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {comparisonBodyStyles.length > 0 && (
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-100 to-blue-100">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-orange-600">Сравнение кузовов</h2>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {comparisonBodyStyles.map(bodyStyle => (
                  <div key={bodyStyle.id} className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
                      <p className="text-white font-bold">{bodyStyle.name}</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleRemoveFromComparison(bodyStyle)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 bg-orange-100 dark:bg-gray-700 text-left text-orange-600">Характеристика</th>
                      {comparisonBodyStyles.map(bodyStyle => (
                        <th key={bodyStyle.id} className="p-4 bg-orange-100 dark:bg-gray-700 text-left text-orange-600">{bodyStyle.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4">Разгон до 100 км/ч</td>
                      {comparisonBodyStyles.map(bodyStyle => (
                        <td key={bodyStyle.id} className="p-4 text-gray-600 dark:text-gray-400">
                          {bodyStyle.characteristics.split(', ')[0].split('за ')[1]}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4">Коробка передач</td>
                      {comparisonBodyStyles.map(bodyStyle => (
                        <td key={bodyStyle.id} className="p-4 text-gray-600 dark:text-gray-400">
                          {bodyStyle.characteristics.split(', ')[1]}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4">Доступные моторы</td>
                      {comparisonBodyStyles.map(bodyStyle => (
                        <td key={bodyStyle.id} className="p-4 text-gray-600 dark:text-gray-400">
                          {bodyStyle.engines.join(', ')}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-orange-300 to-blue-300">
        <p className="text-xs text-white">© 2023 Шоука Audi 80. Все права защищены.</p>
      </footer>
    </div>
  )
}
