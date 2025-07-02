import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-fitness-blue to-fitness-blue/80 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Твой путь к <span className="text-fitness-orange">идеальной</span>{" "}
              форме
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Персональные программы тренировок, питания и комплексный подход к
              здоровью
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-fitness-orange hover:bg-fitness-orange/90 text-white font-semibold px-8 py-3"
              >
                <Icon name="Zap" className="mr-2" size={20} />
                Начать сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-fitness-blue"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Наши <span className="text-fitness-blue">услуги</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к достижению ваших фитнес-целей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-fitness-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Dumbbell"
                    className="text-fitness-blue"
                    size={32}
                  />
                </div>
                <CardTitle className="font-heading text-xl">
                  Программы тренировок
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Персональные планы тренировок для любого уровня подготовки
                </p>
                <Badge
                  variant="secondary"
                  className="bg-fitness-blue/10 text-fitness-blue"
                >
                  От 2990 ₽
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-fitness-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Apple"
                    className="text-fitness-orange"
                    size={32}
                  />
                </div>
                <CardTitle className="font-heading text-xl">
                  Программы питания
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Индивидуальные планы питания для достижения целей
                </p>
                <Badge
                  variant="secondary"
                  className="bg-fitness-orange/10 text-fitness-orange"
                >
                  От 1990 ₽
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-fitness-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="BookOpen"
                    className="text-fitness-blue"
                    size={32}
                  />
                </div>
                <CardTitle className="font-heading text-xl">
                  Полезные статьи
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Экспертные советы и рекомендации от профессионалов
                </p>
                <Badge
                  variant="secondary"
                  className="bg-fitness-blue/10 text-fitness-blue"
                >
                  Бесплатно
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-fitness-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="ShoppingBag"
                    className="text-fitness-orange"
                    size={32}
                  />
                </div>
                <CardTitle className="font-heading text-xl">
                  Спортивное питание
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Качественные добавки и спортивное питание
                </p>
                <Badge
                  variant="secondary"
                  className="bg-fitness-orange/10 text-fitness-orange"
                >
                  Каталог
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Отзывы <span className="text-fitness-orange">клиентов</span>
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-fitness-orange">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Программа тренировок помогла мне сбросить 15 кг за 3 месяца.
                  Результат превзошел все ожидания!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fitness-blue/10 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" className="text-fitness-blue" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Анна М.</p>
                    <p className="text-sm text-gray-500">Клиент 6 месяцев</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-fitness-orange">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Персональный план питания изменил мое отношение к еде.
                  Чувствую себя полным энергии!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fitness-orange/10 rounded-full flex items-center justify-center mr-3">
                    <Icon
                      name="User"
                      className="text-fitness-orange"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Михаил К.</p>
                    <p className="text-sm text-gray-500">Клиент 1 год</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-fitness-orange">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Профессиональный подход и постоянная поддержка. Рекомендую
                  всем друзьям!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fitness-blue/10 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" className="text-fitness-blue" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Елена Д.</p>
                    <p className="text-sm text-gray-500">Клиент 8 месяцев</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
                Готов <span className="text-fitness-blue">начать?</span>
              </h2>
              <p className="text-xl text-gray-600">
                Свяжись с нами для бесплатной консультации
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-fitness-blue/10 rounded-full flex items-center justify-center mr-4">
                      <Icon
                        name="Phone"
                        className="text-fitness-blue"
                        size={20}
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-fitness-orange/10 rounded-full flex items-center justify-center mr-4">
                      <Icon
                        name="Mail"
                        className="text-fitness-orange"
                        size={20}
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@fitness-studio.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-fitness-blue/10 rounded-full flex items-center justify-center mr-4">
                      <Icon
                        name="MapPin"
                        className="text-fitness-blue"
                        size={20}
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-gray-600">
                        Москва, ул. Спортивная, 10
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Оставить заявку
                </h3>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" className="border-gray-300" />
                  <Input placeholder="Телефон" className="border-gray-300" />
                  <Input placeholder="Email" className="border-gray-300" />
                  <Textarea
                    placeholder="Сообщение"
                    className="border-gray-300 h-32"
                  />
                  <Button className="w-full bg-fitness-blue hover:bg-fitness-blue/90 text-white font-semibold">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">
              <span className="text-fitness-blue">Fitness</span>{" "}
              <span className="text-fitness-orange">Studio</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Твой надежный партнер в достижении фитнес-целей
            </p>
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
